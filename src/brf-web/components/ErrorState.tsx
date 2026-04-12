"use client";

interface ErrorStateProps {
  title?: string;
  message?: string;
  retry?: () => void;
}

export default function ErrorState({
  title = "Něco se pokazilo",
  message = "Nepodařilo se načíst data. Server je možná nedostupný.",
  retry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-6 text-center">
      <span className="material-symbols-outlined text-6xl text-stone-300 mb-4">
        cloud_off
      </span>
      <h2 className="text-2xl font-black tracking-tight text-stone-900 mb-2">
        {title}
      </h2>
      <p className="text-stone-500 max-w-md mb-8">{message}</p>
      {retry && (
        <button
          onClick={retry}
          className="px-6 py-2.5 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-colors"
        >
          Zkusit znovu
        </button>
      )}
    </div>
  );
}
