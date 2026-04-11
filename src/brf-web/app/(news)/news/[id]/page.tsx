import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleById, articles } from "@/lib/mock-data";
import Badge from "@/components/Badge";

export function generateStaticParams() {
  return articles.map((a) => ({ id: a.id }));
}

export default async function ArticleDetailPage(
  props: PageProps<"/news/[id]">
) {
  const { id } = await props.params;
  const article = getArticleById(id);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#9e8e7a] mb-8">
          <Link href="/news" className="hover:text-[#ffbe5b] transition-colors">
            News
          </Link>
          <span>›</span>
          <span className="text-[#d6c4ae] truncate max-w-xs">
            {article.title}
          </span>
        </nav>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-5">
            <Badge label={article.tag} variant="tag" />
            <span className="text-sm text-[#9e8e7a]">{article.readTime}</span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-extrabold text-[#e5e2e1] mb-5 leading-tight"
            style={{ fontFamily: "Epilogue, sans-serif" }}
          >
            {article.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-[#9e8e7a]">
            <span>By {article.author}</span>
            <span>·</span>
            <span>{article.publishedAt}</span>
          </div>
        </div>

        {/* Article Body */}
        <article className="prose-custom mb-12">
          {article.content.map((section, index) => {
            if (section.type === "heading") {
              return (
                <h2
                  key={index}
                  className="text-xl font-bold text-[#e5e2e1] mt-8 mb-3"
                  style={{ fontFamily: "Epilogue, sans-serif" }}
                >
                  {section.text}
                </h2>
              );
            }
            if (section.type === "quote") {
              return (
                <blockquote
                  key={index}
                  className="border-l-4 border-[#ffbe5b] pl-5 my-6 italic text-[#d6c4ae] text-lg leading-relaxed"
                >
                  &ldquo;{section.text}&rdquo;
                </blockquote>
              );
            }
            return (
              <p
                key={index}
                className="text-[#d6c4ae] leading-relaxed mb-4 text-base"
              >
                {section.text}
              </p>
            );
          })}
        </article>

        {/* Related Articles */}
        <div>
          <h2
            className="text-xl font-bold text-[#e5e2e1] mb-5"
            style={{ fontFamily: "Epilogue, sans-serif" }}
          >
            More Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedArticles.map((related) => (
              <Link
                key={related.id}
                href={`/news/${related.id}`}
                className="bg-[#1c1b1b] rounded-xl p-5 hover:bg-[#20201f] transition-colors group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Badge label={related.tag} variant="tag" />
                </div>
                <h3
                  className="font-bold text-[#e5e2e1] group-hover:text-[#ffbe5b] transition-colors mb-2 text-sm leading-snug"
                  style={{ fontFamily: "Epilogue, sans-serif" }}
                >
                  {related.title}
                </h3>
                <p className="text-xs text-[#9e8e7a]">
                  {related.author} · {related.readTime}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
