export default function Footer() {
  return (
    <footer className="bg-stone-100 border-t border-stone-200 py-8 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 w-full max-w-7xl mx-auto">
        <div className="mb-4 md:mb-0">
          <span className="text-lg font-bold text-stone-900">Brewfolio</span>
          <p className="text-xs text-stone-500 mt-1 font-medium">© 2024 Brewfolio Craft Beer Journal</p>
        </div>
        <div className="flex gap-8 text-sm font-medium">
          <a className="text-stone-500 hover:underline decoration-orange-500 transition-all" href="#">Privacy</a>
          <a className="text-stone-500 hover:underline decoration-orange-500 transition-all" href="#">Terms</a>
          <a className="text-stone-500 hover:underline decoration-orange-500 transition-all" href="#">Contact</a>
        </div>
        <div className="mt-4 md:mt-0 flex gap-4">
          <a className="text-stone-400 hover:text-orange-600 transition-colors" href="#">
            <span className="material-symbols-outlined text-lg">public</span>
          </a>
          <a className="text-stone-400 hover:text-orange-600 transition-colors" href="#">
            <span className="material-symbols-outlined text-lg">alternate_email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
