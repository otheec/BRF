const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

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

// ── Fetch functions ───────────────────────────────────────────────────────────

export async function listArticles(
  skip = 0,
  take = 10
): Promise<ListArticlesResponse> {
  const res = await fetch(`${API_URL}/articles?skip=${skip}&take=${take}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Failed to fetch articles: ${res.status}`);
  return res.json();
}

export async function getArticle(id: string): Promise<ArticleDetail | null> {
  const res = await fetch(`${API_URL}/articles/${id}`, { cache: "no-store" });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to fetch article: ${res.status}`);
  return res.json();
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

export async function listBreweries(
  skip = 0,
  take = 20
): Promise<ListBreweriesResponse> {
  const res = await fetch(
    `${API_URL}/breweries?skip=${skip}&take=${take}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error(`Failed to fetch breweries: ${res.status}`);
  return res.json();
}

export async function getBrewery(id: string): Promise<BreweryDetail | null> {
  const res = await fetch(`${API_URL}/breweries/${id}`, { cache: "no-store" });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to fetch brewery: ${res.status}`);
  return res.json();
}

// ── Beer fetch functions ──────────────────────────────────────────────────────

export async function listBeers(
  skip = 0,
  take = 20
): Promise<ListBeersResponse> {
  const res = await fetch(
    `${API_URL}/beers?skip=${skip}&take=${take}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error(`Failed to fetch beers: ${res.status}`);
  return res.json();
}

export async function getBeer(id: string): Promise<BeerDetail | null> {
  const res = await fetch(`${API_URL}/beers/${id}`, { cache: "no-store" });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to fetch beer: ${res.status}`);
  return res.json();
}

export async function listBeersByBrewery(
  breweryId: string
): Promise<ListBeersByBreweryResponse> {
  const res = await fetch(`${API_URL}/breweries/${breweryId}/beers`, {
    cache: "no-store",
  });
  if (!res.ok)
    throw new Error(`Failed to fetch beers by brewery: ${res.status}`);
  return res.json();
}

// ── Venue fetch functions ─────────────────────────────────────────────────────

export async function listVenues(
  skip = 0,
  take = 20
): Promise<ListVenuesResponse> {
  const res = await fetch(
    `${API_URL}/venues?skip=${skip}&take=${take}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error(`Failed to fetch venues: ${res.status}`);
  return res.json();
}

export async function getVenue(id: string): Promise<VenueDetail | null> {
  const res = await fetch(`${API_URL}/venues/${id}`, { cache: "no-store" });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to fetch venue: ${res.status}`);
  return res.json();
}

// ── BeerLog fetch functions ───────────────────────────────────────────────────

export async function listBeerLogs(
  userId = "demo-user",
  skip = 0,
  take = 20
): Promise<ListBeerLogsResponse> {
  const res = await fetch(
    `${API_URL}/beer-logs?userId=${userId}&skip=${skip}&take=${take}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error(`Failed to fetch beer logs: ${res.status}`);
  return res.json();
}
