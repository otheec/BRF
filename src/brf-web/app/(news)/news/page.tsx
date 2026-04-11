import Link from "next/link";
import { articles } from "@/lib/mock-data";
import Badge from "@/components/Badge";

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1
            className="text-3xl md:text-4xl font-extrabold text-[#e5e2e1] mb-2"
            style={{ fontFamily: "Epilogue, sans-serif" }}
          >
            News &amp; Articles
          </h1>
          <p className="text-[#9e8e7a]">
            Stories, guides, and deep dives from the world of craft beer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.id}`}
              className="bg-[#1c1b1b] rounded-xl p-6 hover:bg-[#20201f] transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <Badge label={article.tag} variant="tag" />
                <span className="text-xs text-[#9e8e7a]">
                  {article.readTime}
                </span>
              </div>
              <h2
                className="text-xl font-bold text-[#e5e2e1] group-hover:text-[#ffbe5b] transition-colors mb-2 leading-snug"
                style={{ fontFamily: "Epilogue, sans-serif" }}
              >
                {article.title}
              </h2>
              <p className="text-sm text-[#d6c4ae] mb-4 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-[#9e8e7a]">
                <span>By {article.author}</span>
                <span>{article.publishedAt}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
