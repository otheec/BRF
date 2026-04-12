import Link from "next/link";
import { listArticles, formatDate } from "@/lib/api";

const DEFAULT_CARD_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAjipW3aybNi9uK_TAIYPJ5QaRthgjHht38BmxHarenK6-jCwzhgNe-C6Te6ckkGNLl2I31Rkfv8c-VZ0neCy5rapQNpTiAW8Stlqw1FXwN27SMUzzLeLoArqOGTOD69ubXaybYBViLS4jNahYsnLY2GGUfSHZYno2Sbz-0tJEpUFLFkW2TTBYcoOWwsciD4zK01nDxVdZ4zFXFomWQd1Ltnrff7vkYI_0wmzkJZKRlqfK9yygsk7hAykyZpSWmYLcPIJ4ZioYiLCI";

export default async function NewsPage() {
  const { items: articles } = await listArticles(0, 50);

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Dark hero header */}
      <header className="bg-stone-900 text-white py-20 px-6 text-center">
        <span
          className="material-symbols-outlined text-orange-500 text-5xl mb-4 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          sports_bar
        </span>
        <h1 className="text-4xl font-black tracking-tight mb-3">Novinky a články</h1>
        <p className="text-stone-400 text-lg max-w-xl mx-auto">
          Příběhy, průvodci a hloubkové ponory ze světa řemeslného piva
        </p>
      </header>

      {/* Articles grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Article image */}
              <div className="h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.coverImageUrl ?? DEFAULT_CARD_IMAGE}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Article content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-orange-600 text-xs font-bold uppercase tracking-widest mb-2">
                  {article.tag}
                </p>
                <h2 className="text-lg font-bold text-stone-900 group-hover:text-orange-600 transition-colors leading-snug mb-3">
                  {article.title}
                </h2>
                <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed mb-4 flex-1">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-stone-400 mt-auto pt-4 border-t border-stone-50">
                  <span>{article.readTime}</span>
                  <span>{formatDate(article.publishedAt)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
