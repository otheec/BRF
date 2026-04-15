import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header */}
      <section className="py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 mb-4">
          Ochrana soukromí
        </h1>
        <p className="text-stone-500 text-lg max-w-xl mx-auto">
          Jak zacházíme s vašimi osobními údaji
        </p>
      </section>

      {/* Content */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-stone-900 mb-4">
              1. Správce údajů
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Správcem vašich osobních údajů je Brewfolio. V případě dotazů nás
              můžete kontaktovat prostřednictvím{" "}
              <Link href="/contact" className="text-orange-600 hover:text-orange-700 font-semibold">
                kontaktního formuláře
              </Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black tracking-tight text-stone-900 mb-4">
              2. Jaké údaje zpracováváme
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              V rámci platformy Brewfolio zpracováváme následující kategorie osobních údajů:
            </p>
            <ul className="space-y-3">
              {[
                "Údaje o účtu — uživatelské jméno, e-mailová adresa",
                "Záznamy o pivech — hodnocení, poznámky, navštívená místa",
                "Technické údaje — IP adresa, typ prohlížeče, doba přístupu",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-stone-600">
                  <span className="material-symbols-outlined text-orange-600 mt-0.5 text-lg">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-black tracking-tight text-stone-900 mb-4">
              3. Účel zpracování
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Vaše údaje zpracováváme za účelem poskytování služeb platformy Brewfolio,
              zejména vedení osobního pivního deníku, zobrazování katalogu pivovarů a
              piv a zlepšování uživatelského zážitku.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black tracking-tight text-stone-900 mb-4">
              4. Doba uchování
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Vaše údaje uchováváme po dobu trvání vašeho účtu. Po smazání účtu
              budou vaše osobní údaje odstraněny do 30 dnů, s výjimkou údajů,
              které jsme povinni uchovávat ze zákona.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black tracking-tight text-stone-900 mb-4">
              5. Vaše práva
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Máte právo na přístup ke svým údajům, jejich opravu, výmaz,
              omezení zpracování a přenositelnost údajů. Pro uplatnění svých
              práv nás kontaktujte.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black tracking-tight text-stone-900 mb-4">
              6. Soubory cookies
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Brewfolio používá pouze nezbytné technické cookies pro zajištění
              správného fungování platformy. Nepoužíváme sledovací ani
              marketingové cookies.
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
