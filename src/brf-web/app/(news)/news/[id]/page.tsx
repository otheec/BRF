import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticle, listArticles, formatDate } from "@/lib/api";

const DEFAULT_HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAjipW3aybNi9uK_TAIYPJ5QaRthgjHht38BmxHarenK6-jCwzhgNe-C6Te6ckkGNLl2I31Rkfv8c-VZ0neCy5rapQNpTiAW8Stlqw1FXwN27SMUzzLeLoArqOGTOD69ubXaybYBViLS4jNahYsnLY2GGUfSHZYno2Sbz-0tJEpUFLFkW2TTBYcoOWwsciD4zK01nDxVdZ4zFXFomWQd1Ltnrff7vkYI_0wmzkJZKRlqfK9yygsk7hAykyZpSWmYLcPIJ4ZioYiLCI";

const AUTHOR_AVATARS: Record<string, string> = {
  "Marcus Thorne":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDIM28QpM5nu86SlyrhDXcmbPoNTyEUPnWLzlW24jYmUmuNTM2ab3Tlpp1MGxDe5EbNO6D8gcv64DfXZB1qnku6PlgyJY6jjDCYavmgoo1tlNvfUuCFPIFqrSDcjiz9fJzDIsanUhQuozYXlPx1yDKiuzVvrlB1rb62ZZmO4x_Euh3keknOgSoPcj1NkONqRwCYiGMiW-Cl2xy7cz4Awecpq96gdN4Fg8Qw5BSnU9EfuN2m8NSoVeaVVW8qjHdbz3gnPY7UqY50_dM",
};

function getAuthorDisplayName(authorId: string): string {
  const isGuidLike =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      authorId
    );
  return isGuidLike ? "Autor Brewfolio" : authorId;
}

export default async function ArticleDetailPage(props: PageProps<"/news/[id]">) {
  const { id } = await props.params;

  const [article, { items: allArticles }] = await Promise.all([
    getArticle(id),
    listArticles(0, 50),
  ]);

  if (!article) {
    notFound();
  }

  const relatedArticles = allArticles.filter((a) => a.id !== article.id).slice(0, 3);
  const heroImage = article.coverImageUrl ?? DEFAULT_HERO;
  const authorDisplayName = getAuthorDisplayName(article.authorId);
  const authorAvatar = AUTHOR_AVATARS[authorDisplayName];

  return (
    <div className="bg-white text-gray-900 antialiased">
      <main className="pt-16">
        {/* Hero Section */}
        <header className="relative w-full h-[614px] min-h-[400px] flex items-end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover"
            src={heroImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="relative max-w-4xl mx-auto px-6 pb-12 w-full">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-orange-600 text-white text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded">
                {article.tag}
              </span>
              <span className="text-white/80 text-sm font-medium">{article.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              {article.title}
            </h1>
            <div className="flex items-center gap-4">
              {authorAvatar ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt={authorDisplayName}
                  className="w-12 h-12 rounded-full border-2 border-white/20 object-cover"
                  src={authorAvatar}
                />
              ) : (
                <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-orange-600 flex items-center justify-center text-white font-bold text-lg">
                  {authorDisplayName[0] ?? "?"}
                </div>
              )}
              <div className="text-white">
                <p className="font-bold text-sm">{authorDisplayName}</p>
                <p className="text-xs text-white/70">{formatDate(article.publishedAt)}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Social (Desktop) */}
            <aside className="hidden lg:flex flex-col gap-6 sticky top-24 h-fit">
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-orange-600 hover:border-orange-600 transition-all">
                <span className="material-symbols-outlined text-lg">share</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-orange-600 hover:border-orange-600 transition-all">
                <span className="material-symbols-outlined text-lg">bookmark</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-orange-600 hover:border-orange-600 transition-all">
                <span className="material-symbols-outlined text-lg">thumb_up</span>
              </button>
            </aside>

            {/* Article Body */}
            <div className="flex-1">
              <div className="prose prose-lg max-w-none">
                {article.content.map((section, index) => {
                  if (section.type === "heading") {
                    return (
                      <h2
                        key={index}
                        className="text-2xl font-black text-gray-900 mb-4 mt-8"
                      >
                        {section.text}
                      </h2>
                    );
                  }
                  if (section.type === "quote") {
                    return (
                      <blockquote
                        key={index}
                        className="bg-orange-50 rounded-2xl p-8 my-10 border-none"
                      >
                        <p className="text-2xl font-bold text-orange-900 leading-tight">
                          &ldquo;{section.text}&rdquo;
                        </p>
                      </blockquote>
                    );
                  }
                  if (section.type === "images" && section.images) {
                    return (
                      <div
                        key={index}
                        className="my-10 grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        {section.images.map((img) => (
                          <figure key={img.src}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              alt={img.alt}
                              className="rounded-xl w-full h-64 object-cover"
                              src={img.src}
                            />
                            {img.caption && (
                              <figcaption className="text-xs text-gray-400 mt-2 text-center">
                                {img.caption}
                              </figcaption>
                            )}
                          </figure>
                        ))}
                      </div>
                    );
                  }
                  // paragraph
                  if (index === 0) {
                    return (
                      <p
                        key={index}
                        className="text-xl text-gray-600 leading-relaxed font-light mb-8 italic border-l-4 border-orange-500 pl-6"
                      >
                        {section.text}
                      </p>
                    );
                  }
                  return (
                    <p key={index} className="mb-6 leading-relaxed text-gray-700">
                      {section.text}
                    </p>
                  );
                })}
              </div>

              {/* Tags & Mobile Share */}
              <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                    {article.tag}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                    Vaření piva
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                    Řemeslné pivo
                  </span>
                </div>
                <div className="flex lg:hidden items-center gap-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Sdílet</span>
                  <button className="text-gray-400 hover:text-orange-600 transition-colors">
                    <span className="material-symbols-outlined">share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-black tracking-tight text-gray-900">Další čtení</h2>
                <Link
                  className="text-orange-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  href="/news"
                >
                  Všechny novinky{" "}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    href={`/news/${related.id}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={related.coverImageUrl ?? DEFAULT_HERO}
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-2 block">
                        {related.tag}
                      </span>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-2 mb-4">{related.excerpt}</p>
                      <div className="flex items-center justify-between text-[11px] text-gray-400 font-bold uppercase tracking-tighter">
                        <span>{related.readTime}</span>
                        <span>{formatDate(related.publishedAt)}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
