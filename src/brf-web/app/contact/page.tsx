export default function ContactPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header */}
      <section className="py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 mb-4">
          Kontakt
        </h1>
        <p className="text-stone-500 text-lg max-w-xl mx-auto">
          Máte dotaz nebo nápad? Ozvěte se nám
        </p>
      </section>

      {/* Content */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100 text-center">
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-orange-600 text-2xl">mail</span>
              </div>
              <h3 className="font-black text-lg text-stone-900 mb-2">E-mail</h3>
              <p className="text-stone-500 text-sm mb-3">Odpovíme do 48 hodin</p>
              <a
                href="mailto:info@brewfolio.cz"
                className="text-orange-600 font-semibold text-sm hover:text-orange-700 transition-colors"
              >
                info@brewfolio.cz
              </a>
            </div>

            {/* Community */}
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100 text-center">
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-orange-600 text-2xl">forum</span>
              </div>
              <h3 className="font-black text-lg text-stone-900 mb-2">Komunita</h3>
              <p className="text-stone-500 text-sm mb-3">Diskuse a tipy</p>
              <span className="text-orange-600 font-semibold text-sm">
                Již brzy
              </span>
            </div>

            {/* Feedback */}
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100 text-center">
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-orange-600 text-2xl">lightbulb</span>
              </div>
              <h3 className="font-black text-lg text-stone-900 mb-2">Nápady</h3>
              <p className="text-stone-500 text-sm mb-3">Navrhněte vylepšení</p>
              <a
                href="mailto:napady@brewfolio.cz"
                className="text-orange-600 font-semibold text-sm hover:text-orange-700 transition-colors"
              >
                napady@brewfolio.cz
              </a>
            </div>
          </div>

          {/* About section */}
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-black tracking-tight text-stone-900 mb-6">
              O projektu Brewfolio
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Brewfolio je platforma pro milovníky řemeslného piva. Naším cílem
              je vytvořit místo, kde můžete objevovat nové pivovary, zaznamenávat
              svá oblíbená piva a sledovat novinky ze světa craftu.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Projekt je vyvíjen komunitou nadšenců a je aktuálně v rané fázi
              vývoje. Vaše zpětná vazba je pro nás klíčová — neváhejte se
              ozvat s jakýmkoliv nápadem nebo dotazem.
            </p>
          </div>

          {/* FAQ-like section */}
          <div className="mt-16 max-w-2xl mx-auto">
            <h2 className="text-2xl font-black tracking-tight text-stone-900 mb-8 text-center">
              Časté dotazy
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Je Brewfolio zdarma?",
                  a: "Ano, Brewfolio je a vždy bude zdarma pro osobní použití. Katalog pivovarů a piv je veřejný.",
                },
                {
                  q: "Jak mohu přidat pivovar do katalogu?",
                  a: "Katalog je aktuálně spravován administrátory. Pokud chcete navrhnout přidání pivovaru, napište nám na e-mail.",
                },
                {
                  q: "Jsou moje záznamy v deníku soukromé?",
                  a: "Ano, váš pivní deník je zcela soukromý. Hodnocení a poznámky vidíte pouze vy.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="bg-stone-50 rounded-xl p-6 border border-stone-100"
                >
                  <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-orange-600 text-lg">help</span>
                    {item.q}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed pl-8">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
