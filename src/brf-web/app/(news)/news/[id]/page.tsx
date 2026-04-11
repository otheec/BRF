import { notFound } from "next/navigation";
import { getArticleById, articles } from "@/lib/mock-data";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return articles.map((a) => ({ id: a.id }));
}

const ARTICLE_HERO_IMAGES: Record<string, string> = {
  "hop-harvest":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAjipW3aybNi9uK_TAIYPJ5QaRthgjHht38BmxHarenK6-jCwzhgNe-C6Te6ckkGNLl2I31Rkfv8c-VZ0neCy5rapQNpTiAW8Stlqw1FXwN27SMUzzLeLoArqOGTOD69ubXaybYBViLS4jNahYsnLY2GGUfSHZYno2Sbz-0tJEpUFLFkW2TTBYcoOWwsciD4zK01nDxVdZ4zFXFomWQd1Ltnrff7vkYI_0wmzkJZKRlqfK9yygsk7hAykyZpSWmYLcPIJ4ZioYiLCI",
  "carbonation-science":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBkr2nm0Zh8AgtVUlKSjTEbsqi_XUOia9ZZkUGInrT_E0hB9tiI0V9FlT6yOsUHi4PAxe8GY3HqtFeTBYLg1o4MYjpJD_5UAxbCo2j77Tymwkz3AXKhw6kZ3vmp1td3rWWyfHC_yYUzKuiMkEKheYPtRJz0SLxXvsQ_aqlF_7jWwVaVcprYRZ6SboMArBeuIYL3JCbbUWrS_xUqXpUDLKOS-AsHweNyYy6t6A_07IS_eczHMWF-AiJW57UrYVkoodxvzHHjYSHriEc",
  "barrel-aging":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuARTxp-5PKvex6ZHQT-bzEyKXGJoC-0jLIq7kmW96FmuCyEAkkwwKg_5hNt7YyBAbKJyGjRxWPHrUgjY3iC21_7g_lDGbmp-bO0nP7itg1pBtWtKOI8-JVIFNRXSamUHuX1m3DNnDmVDbSMhyVPmKhjGh1vPe7B0Cx8lxdvVMAnJQZbq71-3hbYJpcUcaRvQxTNVBXHvlodZUJrnt_nBUiHssL5cwhdWMbN9N0z0OJNS1BT-CZYx9sb9w-jDATkpf91T7KsaO1kz18",
  "glassware-guide":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDr6_xezN2BVGeDqDzveoCVPZXQFxol8nCrUxd67xXooqkNFQGAQs4cyY08bk-2EXSe5mFNmkthfm-qHJoIrMrQMbOp_46G7UReek7JL6bCbEaIBCUw8Nfz3vVxWB0qdRrVpP-mrUYys0ymu28V2DyhlSxJA656xWINCWGt4vOLmsZ_arzlQkU7JBbs-WFj_bnwiHqkPmvDRjVJ5BH0DTHLfEEMJGp30LTQ0ndsewuyIJKUTtsGHg2J0qE3FWEy4k536L08snHn8TM",
};

const AUTHOR_AVATARS: Record<string, string> = {
  "Marcus Thorne":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDIM28QpM5nu86SlyrhDXcmbPoNTyEUPnWLzlW24jYmUmuNTM2ab3Tlpp1MGxDe5EbNO6D8gcv64DfXZB1qnku6PlgyJY6jjDCYavmgoo1tlNvfUuCFPIFqrSDcjiz9fJzDIsanUhQuozYXlPx1yDKiuzVvrlB1rb62ZZmO4x_Euh3keknOgSoPcj1NkONqRwCYiGMiW-Cl2xy7cz4Awecpq96gdN4Fg8Qw5BSnU9EfuN2m8NSoVeaVVW8qjHdbz3gnPY7UqY50_dM",
};

const DEFAULT_HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAjipW3aybNi9uK_TAIYPJ5QaRthgjHht38BmxHarenK6-jCwzhgNe-C6Te6ckkGNLl2I31Rkfv8c-VZ0neCy5rapQNpTiAW8Stlqw1FXwN27SMUzzLeLoArqOGTOD69ubXaybYBViLS4jNahYsnLY2GGUfSHZYno2Sbz-0tJEpUFLFkW2TTBYcoOWwsciD4zK01nDxVdZ4zFXFomWQd1Ltnrff7vkYI_0wmzkJZKRlqfK9yygsk7hAykyZpSWmYLcPIJ4ZioYiLCI";

export default async function ArticleDetailPage(props: PageProps<"/news/[id]">) {
  const { id } = await props.params;
  const article = getArticleById(id);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles.filter((a) => a.id !== article.id).slice(0, 3);
  const heroImage = ARTICLE_HERO_IMAGES[id] ?? DEFAULT_HERO;
  const authorAvatar = AUTHOR_AVATARS[article.author];

  return (
    <div className="bg-white text-gray-900 antialiased">
      <main className="pt-16">
        {/* Hero Section */}
        <header className="relative w-full h-[614px] min-h-[400px] flex items-end">
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
                <img
                  alt={article.author}
                  className="w-12 h-12 rounded-full border-2 border-white/20 object-cover"
                  src={authorAvatar}
                />
              ) : (
                <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-orange-600 flex items-center justify-center text-white font-bold text-lg">
                  {article.author[0]}
                </div>
              )}
              <div className="text-white">
                <p className="font-bold text-sm">{article.author}</p>
                <p className="text-xs text-white/70">{article.publishedAt}</p>
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
                    Brewing
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                    Craft Beer
                  </span>
                </div>
                <div className="flex lg:hidden items-center gap-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Share</span>
                  <button className="text-gray-400 hover:text-orange-600 transition-colors">
                    <span className="material-symbols-outlined">share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-black tracking-tight text-gray-900">Keep Reading</h2>
              <a
                className="text-orange-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                href="/news"
              >
                View All News{" "}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((related) => (
                <a
                  key={related.id}
                  href={`/news/${related.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={ARTICLE_HERO_IMAGES[related.id] ?? DEFAULT_HERO}
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
                      <span>{related.publishedAt}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 mt-auto bg-gray-50 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl mx-auto space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-lg font-bold text-gray-900">Brewfolio</span>
            <p className="text-xs text-gray-500 mt-1">© 2024 Brewfolio Craft Community</p>
          </div>
          <div className="flex gap-8">
            <a className="text-xs text-gray-500 hover:text-orange-500 hover:underline transition-all" href="#">Privacy</a>
            <a className="text-xs text-gray-500 hover:text-orange-500 hover:underline transition-all" href="#">Terms</a>
            <a className="text-xs text-gray-500 hover:text-orange-500 hover:underline transition-all" href="#">Contact</a>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-gray-400 hover:text-orange-600 cursor-pointer">public</span>
            <span className="material-symbols-outlined text-gray-400 hover:text-orange-600 cursor-pointer">rss_feed</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
