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
    day: "numeric",
    month: "short",
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
