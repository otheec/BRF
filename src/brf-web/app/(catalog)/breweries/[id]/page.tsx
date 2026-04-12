import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getBreweryById,
  getBeersByBrewery,
  breweries,
} from "@/lib/mock-data";
import Badge from "@/components/Badge";

export function generateStaticParams() {
  return breweries.map((b) => ({ id: b.id }));
}

export default async function BreweryDetailPage(
  props: PageProps<"/breweries/[id]">
) {
  const { id } = await props.params;
  const brewery = getBreweryById(id);

  if (!brewery) {
    notFound();
  }

  const breweryBeers = getBeersByBrewery(brewery.id);

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <Link
          href="/breweries"
          className="inline-flex items-center gap-1 text-sm text-[#9e8e7a] hover:text-[#ffbe5b] transition-colors mb-8"
        >
          ← Zpět na pivovary
        </Link>

        {/* Header */}
        <div className="bg-[#1c1b1b] rounded-2xl p-8 mb-8">
          <div className="mb-4">
            <Badge label={brewery.type} variant="type" />
          </div>
          <h1
            className="text-4xl md:text-5xl font-extrabold text-[#e5e2e1] mb-2"
            style={{ fontFamily: "Epilogue, sans-serif" }}
          >
            {brewery.name}
          </h1>
          <p className="text-[#9e8e7a] text-lg mb-4">
            {brewery.city}, {brewery.country}
          </p>
          <p className="text-[#d6c4ae] text-lg leading-relaxed max-w-2xl">
            {brewery.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-[#1c1b1b] rounded-xl p-5">
            <p className="text-xs text-[#9e8e7a] uppercase tracking-wide mb-1">
              Established
            </p>
            <p className="text-2xl font-bold text-[#ffbe5b]" style={{ fontFamily: "Epilogue, sans-serif" }}>
              {brewery.established}
            </p>
          </div>
          <div className="bg-[#1c1b1b] rounded-xl p-5">
            <p className="text-xs text-[#9e8e7a] uppercase tracking-wide mb-1">
              Piva v katalogu
            </p>
            <p className="text-2xl font-bold text-[#ffbe5b]" style={{ fontFamily: "Epilogue, sans-serif" }}>
              {breweryBeers.length}
            </p>
          </div>
          <div className="bg-[#1c1b1b] rounded-xl p-5">
            <p className="text-xs text-[#9e8e7a] uppercase tracking-wide mb-1">
              Typ
            </p>
            <p className="text-lg font-semibold text-[#e5e2e1]">
              {brewery.type}
            </p>
          </div>
        </div>

        {/* Beers */}
        {breweryBeers.length > 0 && (
          <div>
            <h2
              className="text-2xl font-bold text-[#e5e2e1] mb-5"
              style={{ fontFamily: "Epilogue, sans-serif" }}
            >
              Piva z {brewery.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {breweryBeers.map((beer) => (
                <Link
                  key={beer.id}
                  href={`/beers/${beer.id}`}
                  className="bg-[#20201f] rounded-xl p-5 hover:bg-[#2a2a2a] transition-colors group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Badge label={beer.style} variant="style" />
                    <span className="text-xs text-[#9e8e7a]">
                      {beer.abv}% ABV
                    </span>
                  </div>
                  <h3
                    className="font-bold text-[#e5e2e1] group-hover:text-[#ffbe5b] transition-colors mb-2"
                    style={{ fontFamily: "Epilogue, sans-serif" }}
                  >
                    {beer.name}
                  </h3>
                  <p className="text-sm text-[#d6c4ae] line-clamp-2 leading-relaxed">
                    {beer.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
