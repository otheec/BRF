import Link from "next/link";
import { listArticles, formatDate } from "@/lib/api";
import PageHeader from "@/components/PageHeader";

const DEFAULT_CARD_IMAGE = "/placeholder.svg";

export default async function NewsPage() {
  const { items: articles } = await listArticles(0, 50);

  return (
    <div className="bg-stone-50 min-h-screen">
      <PageHeader
        title="Novinky a články"
        subtitle="Příběhy, průvodci a hloubkové ponory ze světa řemeslného piva"
      />

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
                <p className="text-stone-500 text-sm line-clamp-2 leading-relaxed mb-4 flex-1">
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
