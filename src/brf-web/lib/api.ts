const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

// ── Internal fetch wrapper ───────────────────────────────────────────────────

async function apiFetch<T>(
  path: string,
  opts?: { allow404?: boolean }
): Promise<T | null> {
  const res = await fetch(`${API_URL}${path}`, { cache: "no-store" });
  if (opts?.allow404 && res.status === 404) return null;
  if (!res.ok) throw new Error(`API error ${res.status}: ${path}`);
  return res.json();
}

async function apiGet<T>(path: string): Promise<T> {
  return apiFetch<T>(path) as Promise<T>;
}

async function apiGetOrNull<T>(path: string): Promise<T | null> {
  return apiFetch<T>(path, { allow404: true });
}

// ── Types ────────────────────────────────────────────────────────────────────

export interface ArticleImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ArticleSection {
  type: "paragraph" | "heading" | "quote" | "images";
  text?: string;
  images?: ArticleImage[];
}

export interface ArticleListItem {
  id: string;
  title: string;
  tag: string;
  excerpt: string;
  readTime: string;
  coverImageUrl?: string;
  publishedAt: string;
}

export interface ListArticlesResponse {
  items: ArticleListItem[];
  total: number;
}

export interface ArticleDetail {
  id: string;
  title: string;
  content: ArticleSection[];
  authorId: string;
  tag: string;
  readTime: string;
  excerpt: string;
  coverImageUrl?: string;
  publishedAt: string;
  createdAt: string;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("cs-CZ", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// ── Article fetch functions ───────────────────────────────────────────────────

export function listArticles(skip = 0, take = 10): Promise<ListArticlesResponse> {
  return apiGet(`/articles?skip=${skip}&take=${take}`);
}

export function getArticle(id: string): Promise<ArticleDetail | null> {
  return apiGetOrNull(`/articles/${id}`);
}

// ── Brewery types ─────────────────────────────────────────────────────────────

export interface BreweryListItem {
  id: string;
  name: string;
  city: string;
  country: string;
  type: string;
  description?: string;
  established: number;
}

export interface ListBreweriesResponse {
  items: BreweryListItem[];
  total: number;
}

export interface BreweryDetail {
  id: string;
  name: string;
  city: string;
  country: string;
  type: string;
  description?: string;
  established: number;
  createdAt: string;
}

// ── Beer types ────────────────────────────────────────────────────────────────

export interface BeerListItem {
  id: string;
  name: string;
  style: string;
  abv?: number;
  ibu?: number;
  description?: string;
  breweryId: string;
  breweryName: string;
}

export interface ListBeersResponse {
  items: BeerListItem[];
  total: number;
}

export interface BeerDetail {
  id: string;
  name: string;
  style: string;
  abv?: number;
  ibu?: number;
  description?: string;
  breweryId: string;
  breweryName: string;
  createdAt: string;
}

export interface BeerByBreweryItem {
  id: string;
  name: string;
  style: string;
  abv?: number;
  ibu?: number;
  description?: string;
}

export interface ListBeersByBreweryResponse {
  items: BeerByBreweryItem[];
}

// ── Venue types ───────────────────────────────────────────────────────────────

export interface VenueListItem {
  id: string;
  name: string;
  type: string;
  city: string;
  country: string;
  description?: string;
  amenities: string[];
}

export interface ListVenuesResponse {
  items: VenueListItem[];
  total: number;
}

export interface VenueDetail {
  id: string;
  name: string;
  type: string;
  city: string;
  country: string;
  description?: string;
  amenities: string[];
  createdAt: string;
}

// ── BeerLog types ─────────────────────────────────────────────────────────────

export interface BeerLogItem {
  id: string;
  beerName: string;
  breweryName: string;
  venueName?: string;
  loggedAt: string;
  rating?: number;
  notes?: string;
}

export interface ListBeerLogsResponse {
  items: BeerLogItem[];
  total: number;
}

// ── Brewery fetch functions ───────────────────────────────────────────────────

export function listBreweries(skip = 0, take = 20): Promise<ListBreweriesResponse> {
  return apiGet(`/breweries?skip=${skip}&take=${take}`);
}

export function getBrewery(id: string): Promise<BreweryDetail | null> {
  return apiGetOrNull(`/breweries/${id}`);
}

// ── Beer fetch functions ──────────────────────────────────────────────────────

export function listBeers(skip = 0, take = 20): Promise<ListBeersResponse> {
  return apiGet(`/beers?skip=${skip}&take=${take}`);
}

export function getBeer(id: string): Promise<BeerDetail | null> {
  return apiGetOrNull(`/beers/${id}`);
}

export function listBeersByBrewery(breweryId: string): Promise<ListBeersByBreweryResponse> {
  return apiGet(`/breweries/${breweryId}/beers`);
}

// ── Venue fetch functions ─────────────────────────────────────────────────────

export function listVenues(skip = 0, take = 20): Promise<ListVenuesResponse> {
  return apiGet(`/venues?skip=${skip}&take=${take}`);
}

export function getVenue(id: string): Promise<VenueDetail | null> {
  return apiGetOrNull(`/venues/${id}`);
}

// ── BeerLog fetch functions ───────────────────────────────────────────────────

export function listBeerLogs(userId = "demo-user", skip = 0, take = 20): Promise<ListBeerLogsResponse> {
  return apiGet(`/beer-logs?userId=${userId}&skip=${skip}&take=${take}`);
}
