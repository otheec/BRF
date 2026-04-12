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

const BEER_IMAGES: Record<string, string> = {
  "c3d4e5f6-3333-4000-8000-000000000003":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDr8Ix8X6OWPSBemE9gu_dthZlYO3gB6WNn8bhHHVYx-ejjCeuxq7eteuqT9otMNuT5dt-fgQlpSa9FQ-n_lJqOnAinS9P6FyIuJHAd_p2fubP2-mI-nQlCs_MBN3Fz8SADQbrfB_EFTG-sMe7ZCul1VMw_yieElBhnUPnU6C8TTHfuz-FOiSMIgeoectTW8pwVpuVCgdZQtp5ycJIAqVhdIe2xGuD8ez3_0-HoUNQx-lHx0zhHuEqG7c3El2ADb4uWvGx-tT9_Iwo",
  "c3d4e5f6-3333-4000-8000-000000000004":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDS6XarVM3C1d536IXKyIe_hU_C90GHAd1VT8ghBL7RGhLU82Y-xeByQ2z6Nb41qeetYDA0cFr7fm3tEzyQf7FSsaipIYhggbvejQ4GkhGYZ5jI_eyUjYfzK4FVHYyD5Hf3gr6YSL6GrrEXBj-o3WMm5Nj8AWUONjQHqgIjwvB55tgtOPIaow15HF3HXM5IIQiTwkrnNZSGcWU7xDfbJIioEvwcZEQH7vD3DAPNTgW2FJyMAr6hvHVcI3I6WZiTze-Oxui-7CzmWQk",
  "c3d4e5f6-3333-4000-8000-000000000005":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDbwGVIaMSHyLvwszWxgsrzIyuiUCr8ls4-XQ3ghjWdSs1L9WAUip0YCmytun6SHJI_wx9rxGdsAGrIKwdwSjQhtTEE8wLXwDqg9CvERs0hHuURyYCgNsR7tYTjeOnhxBKe_YDHGxioRtGSoooaPkyBL4KubwrTD1qs-Da7F-PEObt94U2GL4SdWKmLOhDXMqXfl0Vz1RdvLe4mg2hDy9gt8xzl7uexd6TGRVffDCPV-oLdeMdYqWihSsa41LG4je8EH8-QDesVEGE",
  "c3d4e5f6-3333-4000-8000-000000000006":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDhC8F4yYlDpfgo5Ar6cqRmVcA8TW_GvXKbWvsykOCa6hwEGtgHEKXmxQSk9drBTv-UzGjIMVJW429z5mlGjC5VZrLhWg4Yr1na1Icp6J80jD1PZsfXpi0YRU1HagTDFAptJqf8mbyI5eG9ZXOBfognR9dT9KaeNXqXkxighZ6E7lggHW6qkq9lmZxc0fMUhu3qzZGmbghuoKJek56qisLv4Y_10FT21UEq2bJHNqxF114Oa78vKq5FRBYCq0M5xv2rxhRNHG2-9DE",
  "c3d4e5f6-3333-4000-8000-000000000007":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB3nmEcgssd4-GnJUYrNGmDeQbih521GrIjoFApYspQdUKASGuFisD-dDPLJJA2CcR4ffvYqZ19nVEu3let6JshqjIbzZi8i39o25-js4AGntq7QlRL7KwycIRoAb0r2Mc-M1-K9P0BorUU61Yk9SHOyuhfhyhc4e0vlvEQkdxDufg2dt7RVfnWix2IFk40nYSrg7q0n2lI8IgSni-GXSxhRPNrE7AORFhZl0OV7N5zWNSHxl-RlB00uK1dke7b92tnUCVD2L4JdsQ",
};

const DEFAULT_BEER_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDr8Ix8X6OWPSBemE9gu_dthZlYO3gB6WNn8bhHHVYx-ejjCeuxq7eteuqT9otMNuT5dt-fgQlpSa9FQ-n_lJqOnAinS9P6FyIuJHAd_p2fubP2-mI-nQlCs_MBN3Fz8SADQbrfB_EFTG-sMe7ZCul1VMw_yieElBhnUPnU6C8TTHfuz-FOiSMIgeoectTW8pwVpuVCgdZQtp5ycJIAqVhdIe2xGuD8ez3_0-HoUNQx-lHx0zhHuEqG7c3El2ADb4uWvGx-tT9_Iwo";

const MAP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDzrcXAEVB4njVeRSwJuSIK5ry2GyFzuo01bogblqp9FOsh7AxV4d1UruCni61SmfjqTlKcax2sPvjFkUf1DDKZIUrvT6C4tXh4oGJXXIt4jP8iQtR5uGnWSj_zuvaTlHzl4oT7_4EuI9To4zpxFZK6BG9sWIJYDHO4YUnRNeZbOR-Br3udM4TFJaR33Ize2L9e-8sgLp-afwoMp-YjA0XiqKQB8PgP9PJza5tla4SBvESxyBLp9Roq0AIaOWTuvN6yvSyxrEIS3Zc";

export default async function BeerDetailPage(props: PageProps<"/beers/[id]">) {
  const { id } = await props.params;
  const beer = await getBeer(id);

  if (!beer) {
    notFound();
  }

  const tasting = tastingNotesByStyle[beer.style] ?? defaultTasting;
  const flavorTags = flavorTagsByStyle[beer.style] ?? ["Balanced", "Complex", "Smooth"];
  const beerImage = BEER_IMAGES[id] ?? DEFAULT_BEER_IMAGE;
  const { items: nearbyVenues } = await listVenues(0, 3);

  return (
    <div className="bg-white text-gray-900 antialiased min-h-screen">
      <main className="pt-16 flex-grow">
        {/* Hero Section */}
        <section className="relative w-full bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row gap-12 items-center">
            {/* Beer Image */}
            <div className="w-full md:w-1/2">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100">
                <img
                  alt={beer.name}
                  className="w-full h-full object-cover"
                  src={beerImage}
                />
              </div>
            </div>

            {/* Beer Info */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full">
                  {beer.style}
                </span>
                <h1 className="text-5xl font-black tracking-tight text-gray-900 leading-tight">
                  {beer.name}
                </h1>
                {beer.breweryName && (
                  <p className="text-xl text-gray-600">
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
              <div className="flex gap-8 border-y border-gray-200 py-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">ABV</p>
                  <p className="text-2xl font-black text-gray-900">{beer.abv}%</p>
                </div>
                {beer.ibu && (
                  <div className="border-l border-gray-200 pl-8">
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">IBU</p>
                    <p className="text-2xl font-black text-gray-900">{beer.ibu}</p>
                  </div>
                )}
                <div className={beer.ibu ? "border-l border-gray-200 pl-8" : ""}>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Hodnocení</p>
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-black text-gray-900">4.8</span>
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
                <button className="bg-white border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:border-orange-600 hover:text-orange-600 transition-all active:scale-95">
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
                <p className="text-lg text-gray-600 leading-relaxed">{beer.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {flavorTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-semibold text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h2 className="text-2xl font-black tracking-tight mb-8">Degustační poznámky</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-orange-600">
                      <span className="material-symbols-outlined">air</span>
                      <h3 className="font-bold uppercase tracking-widest text-xs">Vůně</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{tasting.aroma}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-orange-600">
                      <span className="material-symbols-outlined">visibility</span>
                      <h3 className="font-bold uppercase tracking-widest text-xs">Vzhled</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{tasting.appearance}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-orange-600">
                      <span className="material-symbols-outlined">texture</span>
                      <h3 className="font-bold uppercase tracking-widest text-xs">Pocit v ústech</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{tasting.mouthfeel}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: On Tap Nearby */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-black tracking-tight flex items-center gap-2">
                    <span className="material-symbols-outlined text-orange-600">location_on</span>
                    Na čepu v okolí
                  </h2>
                </div>
                <div className="divide-y divide-gray-100">
                  {nearbyVenues.map((v) => (
                    <Link
                      key={v.id}
                      href={`/venues/${v.id}`}
                      className="p-6 flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer group"
                    >
                      <div>
                        <p className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {v.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {v.city}, {v.country}
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-gray-300 group-hover:text-orange-600">
                        chevron_right
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="h-48 bg-gray-200 relative">
                  <img
                    alt="Location Map"
                    className="w-full h-full object-cover grayscale opacity-50"
                    src={MAP_IMAGE}
                  />
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
