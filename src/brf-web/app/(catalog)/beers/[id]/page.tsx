import Link from "next/link";
import { notFound } from "next/navigation";
import { getBeer, listVenues } from "@/lib/api";

const tastingNotesByStyle: Record<
  string,
  { aroma: string; appearance: string; mouthfeel: string }
> = {
  "Hazy IPA": {
    aroma: "Tropical mango, pineapple, passionfruit, soft citrus peel",
    appearance: "Hazy golden, pillowy white head, opaque",
    mouthfeel: "Soft, full-bodied, smooth with low bitterness",
  },
  "Coffee Stout": {
    aroma: "Dark roast coffee, bittersweet chocolate, dried fruit",
    appearance: "Jet black, dense tan head, opaque",
    mouthfeel: "Velvety, full-bodied, creamy finish",
  },
  NEIPA: {
    aroma: "Heavy scents of overripe peach, tangerine zest, and a hint of fresh damp pine needles.",
    appearance: "Opaque, straw-yellow body with a persistent, creamy two-finger head of tight white bubbles.",
    mouthfeel: "Full-bodied and velvety with soft carbonation. Minimal bitterness despite the high hop load.",
  },
  "West Coast IPA": {
    aroma: "Pine resin, grapefruit, fresh grass, light floral notes",
    appearance: "Clear golden amber, white head",
    mouthfeel: "Dry, medium body, crisp finish",
  },
  "Imperial Stout": {
    aroma: "Espresso, dark chocolate, molasses, vanilla",
    appearance: "Pitch black, tan head",
    mouthfeel: "Full-bodied, warming, silky, long finish",
  },
  "Czech Pilsner": {
    aroma: "Noble hops, light grain, subtle floral notes",
    appearance: "Brilliantly clear pale gold, white head",
    mouthfeel: "Crisp, light-medium body, clean finish",
  },
  "Flanders Red": {
    aroma: "Tart cherry, oak, balsamic, leather, vanilla",
    appearance: "Deep ruby red, off-white head",
    mouthfeel: "Tart, medium body, dry finish",
  },
  Pilsner: {
    aroma: "Biscuit malt, light herbal hops, grain",
    appearance: "Crystal clear pale straw, white head",
    mouthfeel: "Light, crisp, clean, refreshing",
  },
};

const defaultTasting = {
  aroma: "Complex hop character with balanced malt notes",
  appearance: "Clear with a persistent head",
  mouthfeel: "Balanced, medium-bodied",
};

const flavorTagsByStyle: Record<string, string[]> = {
  "Hazy IPA": ["Mango", "Pineapple", "Citrus", "Smooth"],
  "Coffee Stout": ["Coffee", "Chocolate", "Roasty", "Creamy"],
  NEIPA: ["Grapefruit", "Mango", "Resinous", "Creamy"],
  "West Coast IPA": ["Pine", "Grapefruit", "Resinous", "Crisp"],
  "Imperial Stout": ["Espresso", "Chocolate", "Molasses", "Warming"],
  "Czech Pilsner": ["Noble Hops", "Biscuit", "Floral", "Clean"],
  "Flanders Red": ["Cherry", "Oak", "Tart", "Vanilla"],
  Pilsner: ["Biscuit", "Herbal", "Light", "Refreshing"],
};

const DEFAULT_IMAGE = "/placeholder.svg";

export default async function BeerDetailPage(props: PageProps<"/beers/[id]">) {
  const { id } = await props.params;
  const beer = await getBeer(id);

  if (!beer) {
    notFound();
  }

  const tasting = tastingNotesByStyle[beer.style] ?? defaultTasting;
  const flavorTags = flavorTagsByStyle[beer.style] ?? ["Balanced", "Complex", "Smooth"];
  const { items: nearbyVenues } = await listVenues(0, 3);

  return (
    <div className="bg-white text-stone-900 antialiased min-h-screen">
      <main className="pt-16 flex-grow">
        {/* Hero Section */}
        <section className="relative w-full bg-stone-50 border-b border-stone-100">
          <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row gap-12 items-center">
            {/* Beer Image */}
            <div className="w-full md:w-1/2">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-white border border-stone-100">
                <img
                  alt={beer.name}
                  className="w-full h-full object-cover"
                  src={beer.imageUrl ?? DEFAULT_IMAGE}
                />
              </div>
            </div>

            {/* Beer Info */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full">
                  {beer.style}
                </span>
                <h1 className="text-5xl font-black tracking-tight text-stone-900 leading-tight">
                  {beer.name}
                </h1>
                {beer.breweryName && (
                  <p className="text-xl text-stone-600">
                    od{" "}
                    <Link
                      href={`/breweries/${beer.breweryId}`}
                      className="text-orange-600 font-semibold hover:underline decoration-2"
                    >
                      {beer.breweryName}
                    </Link>
                  </p>
                )}
              </div>

              {/* Stats */}
              <div className="flex gap-8 border-y border-stone-200 py-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 font-bold">ABV</p>
                  <p className="text-2xl font-black text-stone-900">{beer.abv}%</p>
                </div>
                {beer.ibu && (
                  <div className="border-l border-stone-200 pl-8">
                    <p className="text-xs uppercase tracking-widest text-stone-400 font-bold">IBU</p>
                    <p className="text-2xl font-black text-stone-900">{beer.ibu}</p>
                  </div>
                )}
                <div className={beer.ibu ? "border-l border-stone-200 pl-8" : ""}>
                  <p className="text-xs uppercase tracking-widest text-stone-400 font-bold">Hodnocení</p>
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-black text-stone-900">4.8</span>
                    <span
                      className="material-symbols-outlined text-orange-500"
                      style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                    >
                      star
                    </span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-orange-700 transition-all shadow-lg shadow-orange-200 active:scale-95">
                  <span className="material-symbols-outlined">edit_note</span>
                  Přidat do deníku
                </button>
                <button className="bg-white border-2 border-stone-200 text-stone-900 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:border-orange-600 hover:text-orange-600 transition-all active:scale-95">
                  <span className="material-symbols-outlined">favorite</span>
                  Přidat do oblíbených
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Details Grid */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Flavor Profile & Tasting Notes */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-black tracking-tight">Chuťový profil</h2>
                <p className="text-lg text-stone-600 leading-relaxed">{beer.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {flavorTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-stone-100 rounded-lg text-sm font-semibold text-stone-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
                <h2 className="text-2xl font-black tracking-tight mb-8">Degustační poznámky</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-orange-600">
                      <span className="material-symbols-outlined">air</span>
                      <h3 className="font-bold uppercase tracking-widest text-xs">Vůně</h3>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">{tasting.aroma}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-orange-600">
                      <span className="material-symbols-outlined">visibility</span>
                      <h3 className="font-bold uppercase tracking-widest text-xs">Vzhled</h3>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">{tasting.appearance}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-orange-600">
                      <span className="material-symbols-outlined">texture</span>
                      <h3 className="font-bold uppercase tracking-widest text-xs">Pocit v ústech</h3>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">{tasting.mouthfeel}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: On Tap Nearby */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
                <div className="p-6 border-b border-stone-100">
                  <h2 className="text-xl font-black tracking-tight flex items-center gap-2">
                    <span className="material-symbols-outlined text-orange-600">location_on</span>
                    Na čepu v okolí
                  </h2>
                </div>
                <div className="divide-y divide-stone-100">
                  {nearbyVenues.map((v) => (
                    <Link
                      key={v.id}
                      href={`/venues/${v.id}`}
                      className="p-6 flex justify-between items-center hover:bg-stone-50 transition-colors cursor-pointer group"
                    >
                      <div>
                        <p className="font-bold text-stone-900 group-hover:text-orange-600 transition-colors">
                          {v.name}
                        </p>
                        <p className="text-sm text-stone-500">
                          {v.city}, {v.country}
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-stone-300 group-hover:text-orange-600">
                        chevron_right
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="h-48 bg-stone-200 relative flex items-center justify-center">
                  <span className="material-symbols-outlined text-stone-400 text-4xl">map</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white px-4 py-2 rounded-lg shadow-md font-bold text-sm hover:bg-orange-600 hover:text-white transition-all">
                      Zobrazit celou mapu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
