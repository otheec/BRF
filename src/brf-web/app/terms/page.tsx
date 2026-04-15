import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header */}
      <section className="py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 mb-4">
          Podmínky používání
        </h1>
        <p className="text-stone-500 text-lg max-w-xl mx-auto">
          Pravidla a podmínky pro používání platformy Brewfolio
        </p>
      </section>

      {/* Content */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-stone-900 mb-4">
              1. Obecná ustanovení
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Tyto podmínky upravují práva a povinnosti uživatelů platformy
              Brewfolio. Používáním platformy souhlasíte s těmito podmínkami.
              Provozovatelem platformy je Brewfolio.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black tracking-tight text-stone-900 mb-4">
              2. Uživatelský účet
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Pro využívání funkcí osobního pivního deníku je nutné vytvoření
              uživatelského účtu. Jste zodpovědní za bezpečnost svého účtu a
              všechny aktivity provedené pod vaším účtem. Katalog pivovarů,
              piv a míst je přístupný bez registrace.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black tracking-tight text-stone-900 mb-4">
              3. Obsah platformy
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Katalog pivovarů, piv a míst je spravován administrátory platformy.
              Uživatelé mohou přidávat vlastní záznamy do svého pivního deníku,
              včetně hodnocení a poznámek.
            </p>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-orange-600 mt-0.5">info</span>
                <p className="text-sm text-orange-800">
                  Hodnocení a poznámky v pivním deníku jsou soukromé a viditelné
                  pouze pro vlastníka účtu.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black tracking-tight text-stone-900 mb-4">
              4. Zakázané chování
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Při používání platformy Brewfolio je zakázáno:
            </p>
            <ul className="space-y-3">
              {[
                "Porušovat platné právní předpisy České republiky",
                "Pokoušet se o neoprávněný přístup k datům jiných uživatelů",
                "Automatizovaně stahovat obsah platformy (scraping)",
                "Šířit škodlivý software prostřednictvím platformy",
                "Zneužívat platformu k propagaci alkoholu nezletilým",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-stone-600">
                  <span className="material-symbols-outlined text-orange-600 mt-0.5 text-lg">block</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-black tracking-tight text-stone-900 mb-4">
              5. Odpovědnost
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Brewfolio nezodpovídá za správnost informací v katalogu pivovarů a
              piv. Informace jsou poskytovány „tak, jak jsou" a mohou se lišit
              od skutečnosti. Platformu používáte na vlastní odpovědnost.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black tracking-tight text-stone-900 mb-4">
              6. Změny podmínek
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Vyhrazujeme si právo tyto podmínky kdykoliv změnit. O významných
              změnách budete informováni prostřednictvím platformy. Pokračováním
              v používání platformy po změně podmínek vyjadřujete souhlas s
              novým zněním.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black tracking-tight text-stone-900 mb-4">
              7. Kontakt
            </h2>
            <p className="text-stone-600 leading-relaxed">
              V případě dotazů ohledně těchto podmínek nás kontaktujte
              prostřednictvím{" "}
              <Link href="/contact" className="text-orange-600 hover:text-orange-700 font-semibold">
                kontaktní stránky
              </Link>.
            </p>
          </div>

          {/* Last updated */}
          <div className="pt-8 border-t border-stone-200">
            <p className="text-sm text-stone-400">
              Poslední aktualizace: duben 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
