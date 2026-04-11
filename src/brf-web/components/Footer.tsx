export default function Footer() {
  return (
    <footer className="bg-stone-100 border-t border-stone-200 py-8 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 w-full max-w-7xl mx-auto space-y-4 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-lg font-bold text-stone-900">Brewfolio</span>
          <p className="text-xs text-stone-500 mt-1">© 2024 Brewfolio Craft Community</p>
        </div>
        <div className="flex gap-8">
          <a className="text-xs text-stone-500 hover:text-orange-500 hover:underline transition-all" href="#">Privacy</a>
          <a className="text-xs text-stone-500 hover:text-orange-500 hover:underline transition-all" href="#">Terms</a>
          <a className="text-xs text-stone-500 hover:text-orange-500 hover:underline transition-all" href="#">Contact</a>
        </div>
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-stone-400 hover:text-orange-600 cursor-pointer transition-colors">public</span>
          <span className="material-symbols-outlined text-stone-400 hover:text-orange-600 cursor-pointer transition-colors">rss_feed</span>
        </div>
      </div>
    </footer>
  );
}
