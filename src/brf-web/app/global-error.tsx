"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="cs">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{ fontFamily: "'Public Sans', sans-serif" }}
        className="bg-stone-50 text-stone-900 min-h-screen flex flex-col items-center justify-center px-6 text-center"
      >
        <span className="material-symbols-outlined text-6xl text-stone-300 mb-4">
          cloud_off
        </span>
        <h2 className="text-2xl font-black tracking-tight text-stone-900 mb-2">
          Něco se pokazilo
        </h2>
        <p className="text-stone-500 max-w-md mb-8">
          Nepodařilo se načíst data. Server je možná nedostupný.
        </p>
        <button
          onClick={reset}
          className="px-6 py-2.5 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-colors"
        >
          Zkusit znovu
        </button>
      </body>
    </html>
  );
}
