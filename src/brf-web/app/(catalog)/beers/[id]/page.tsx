import Link from "next/link";
import { notFound } from "next/navigation";
import { getBeerById, getBreweryForBeer, beers } from "@/lib/mock-data";
import Badge from "@/components/Badge";

export function generateStaticParams() {
  return beers.map((b) => ({ id: b.id }));
}

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
    aroma: "Juicy citrus, stone fruit, fresh hop oil, tropical notes",
    appearance: "Hazy orange-gold, persistent white head",
    mouthfeel: "Juicy, medium-full body, soft carbonation",
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

export default async function BeerDetailPage(props: PageProps<"/beers/[id]">) {
  const { id } = await props.params;
  const beer = getBeerById(id);

  if (!beer) {
    notFound();
  }

  const brewery = getBreweryForBeer(beer.breweryId);
  const tasting = tastingNotesByStyle[beer.style] ?? defaultTasting;

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <Link
          href="/beers"
          className="inline-flex items-center gap-1 text-sm text-[#9e8e7a] hover:text-[#ffbe5b] transition-colors mb-8"
        >
          ← Back to Beers
        </Link>

        {/* Header */}
        <div className="bg-[#1c1b1b] rounded-2xl p-8 mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge label={beer.style} variant="style" />
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#353535] text-[#d6c4ae]">
              {beer.abv}% ABV
            </span>
            {beer.ibu && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#353535] text-[#d6c4ae]">
                {beer.ibu} IBU
              </span>
            )}
          </div>
          <h1
            className="text-4xl md:text-5xl font-extrabold text-[#e5e2e1] mb-3"
            style={{ fontFamily: "Epilogue, sans-serif" }}
          >
            {beer.name}
          </h1>
          {brewery && (
            <Link
              href={`/breweries/${brewery.id}`}
              className="text-[#ffbe5b] hover:text-[#e8a020] transition-colors font-medium"
            >
              {brewery.name}
            </Link>
          )}
          <p className="mt-4 text-[#d6c4ae] text-lg leading-relaxed">
            {beer.description}
          </p>
        </div>

        {/* Tasting Notes */}
        <div className="bg-[#1c1b1b] rounded-2xl p-8 mb-6">
          <h2
            className="text-xl font-bold text-[#e5e2e1] mb-6"
            style={{ fontFamily: "Epilogue, sans-serif" }}
          >
            Tasting Notes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-xs text-[#9e8e7a] uppercase tracking-widest mb-2">
                Aroma
              </p>
              <p className="text-sm text-[#d6c4ae] leading-relaxed">
                {tasting.aroma}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#9e8e7a] uppercase tracking-widest mb-2">
                Appearance
              </p>
              <p className="text-sm text-[#d6c4ae] leading-relaxed">
                {tasting.appearance}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#9e8e7a] uppercase tracking-widest mb-2">
                Mouthfeel
              </p>
              <p className="text-sm text-[#d6c4ae] leading-relaxed">
                {tasting.mouthfeel}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full md:w-auto px-8 py-3 rounded-xl font-semibold text-[#131313] transition-opacity hover:opacity-90 active:opacity-80"
          style={{ background: "linear-gradient(135deg, #ffbe5b, #e8a020)" }}
        >
          Log This Beer
        </button>
      </div>
    </div>
  );
}
