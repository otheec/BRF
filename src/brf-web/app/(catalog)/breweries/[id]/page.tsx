import Link from "next/link";
import { notFound } from "next/navigation";
import { getBrewery, listBeersByBrewery } from "@/lib/api";
import Badge from "@/components/Badge";

export default async function BreweryDetailPage(
  props: PageProps<"/breweries/[id]">
) {
  const { id } = await props.params;
  const brewery = await getBrewery(id);

  if (!brewery) {
    notFound();
  }

  const { items: breweryBeers } = await listBeersByBrewery(brewery.id);

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <Link
          href="/breweries"
          className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-orange-600 transition-colors mb-8"
        >
          ← Zpět na pivovary
        </Link>

        {/* Header */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-stone-100 shadow-sm">
          <div className="mb-4">
            <Badge label={brewery.type} variant="type" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 mb-2">
            {brewery.name}
          </h1>
          <p className="text-stone-500 text-lg mb-4 flex items-center gap-1">
            <span className="material-symbols-outlined text-lg">location_on</span>
            {brewery.city}, {brewery.country}
          </p>
          <p className="text-stone-600 text-lg leading-relaxed max-w-2xl">
            {brewery.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-white rounded-xl p-5 border border-stone-100 shadow-sm">
            <p className="text-xs text-stone-400 uppercase tracking-widest font-bold mb-1">
              Založeno
            </p>
            <p className="text-2xl font-black text-stone-900">
              {brewery.established}
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-stone-100 shadow-sm">
            <p className="text-xs text-stone-400 uppercase tracking-widest font-bold mb-1">
              Piva v katalogu
            </p>
            <p className="text-2xl font-black text-stone-900">
              {breweryBeers.length}
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-stone-100 shadow-sm">
            <p className="text-xs text-stone-400 uppercase tracking-widest font-bold mb-1">
              Typ
            </p>
            <p className="text-lg font-semibold text-stone-900">
              {brewery.type}
            </p>
          </div>
        </div>

        {/* Beers */}
        {breweryBeers.length > 0 && (
          <div>
            <h2 className="text-2xl font-black tracking-tight text-stone-900 mb-5">
              Piva z {brewery.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {breweryBeers.map((beer) => (
                <Link
                  key={beer.id}
                  href={`/beers/${beer.id}`}
                  className="bg-white rounded-xl p-5 border border-stone-100 shadow-sm hover:border-orange-200 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Badge label={beer.style} variant="style" />
                    <span className="text-xs text-stone-500">
                      {beer.abv}% ABV
                    </span>
                  </div>
                  <h3 className="font-bold text-stone-900 group-hover:text-orange-600 transition-colors mb-2">
                    {beer.name}
                  </h3>
                  <p className="text-sm text-stone-500 line-clamp-2 leading-relaxed">
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
