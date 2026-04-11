import Link from "next/link";
import { articles } from "@/lib/mock-data";

const articleImages: Record<string, string> = {
  "hop-harvest":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAjipW3aybNi9uK_TAIYPJ5QaRthgjHht38BmxHarenK6-jCwzhgNe-C6Te6ckkGNLl2I31Rkfv8c-VZ0neCy5rapQNpTiAW8Stlqw1FXwN27SMUzzLeLoArqOGTOD69ubXaybYBViLS4jNahYsnLY2GGUfSHZYno2Sbz-0tJEpUFLFkW2TTBYcoOWwsciD4zK01nDxVdZ4zFXFomWQd1Ltnrff7vkYI_0wmzkJZKRlqfK9yygsk7hAykyZpSWmYLcPIJ4ZioYiLCI",
  "carbonation-science":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBkr2nm0Zh8AgtVUlKSjTEbsqi_XUOia9ZZkUGInrT_E0hB9tiI0V9FlT6yOsUHi4PAxe8GY3HqtFeTBYLg1o4MYjpJD_5UAxbCo2j77Tymwkz3AXKhw6kZ3vmp1td3rWWyfHC_yYUzKuiMkEKheYPtRJz0SLxXvsQ_aqlF_7jWwVaVcprYRZ6SboMArBeuIYL3JCbbUWrS_xUqXpUDLKOS-AsHweNyYy6t6A_07IS_eczHMWF-AiJW57UrYVkoodxvzHHjYSHriEc",
  "barrel-aging":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuARTxp-5PKvex6ZHQT-bzEyKXGJoC-0jLIq7kmW96FmuCyEAkkwwKg_5hNt7YyBAbKJyGjRxWPHrUgjY3iC21_7g_lDGbmp-bO0nP7itg1pBtWtKOI8-JVIFNRXSamUHuX1m3DNnDmVDbSMhyVPmKhjGh1vPe7B0Cx8lxdvVMAnJQZbq71-3hbYJpcUcaRvQxTNVBXHvlodZUJrnt_nBUiHssL5cwhdWMbN9N0z0OJNS1BT-CZYx9sb9w-jDATkpf91T7KsaO1kz18",
  "glassware-guide":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDr6_xezN2BVGeDqDzveoCVPZXQFxol8nCrUxd67xXooqkNFQGAQs4cyY08bk-2EXSe5mFNmkthfm-qHJoIrMrQMbOp_46G7UReek7JL6bCbEaIBCUw8Nfz3vVxWB0qdRrVpP-mrUYys0ymu28V2DyhlSxJA656xWINCWGt4vOLmsZ_arzlQkU7JBbs-WFj_bnwiHqkPmvDRjVJ5BH0DTHLfEEMJGp30LTQ0ndsewuyIJKUTtsGHg2J0qE3FWEy4k536L08snHn8TM",
};

export default function NewsPage() {
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
        <h1 className="text-4xl font-black tracking-tight mb-3">News &amp; Articles</h1>
        <p className="text-stone-400 text-lg max-w-xl mx-auto">
          Stories, guides, and deep dives from the world of craft beer
        </p>
      </header>

      {/* Articles grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => {
            const imgSrc = articleImages[article.id];
            return (
              <Link
                key={article.id}
                href={`/news/${article.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Article image */}
                <div className="h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imgSrc}
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
                    <span>{article.publishedAt}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-100 border-t border-stone-200 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-orange-600 font-black italic text-xl tracking-tighter">Brewfolio</span>
          <span className="text-stone-500 text-sm">© 2024 Brewfolio. All rights reserved.</span>
          <div className="flex items-center gap-6 text-stone-500 text-sm">
            <a href="#" className="hover:text-stone-700 transition-colors">Privacy</a>
            <a href="#" className="hover:text-stone-700 transition-colors">Terms</a>
            <a href="#" className="hover:text-stone-700 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
