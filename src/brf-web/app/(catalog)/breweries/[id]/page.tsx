import Link from "next/link";
import { notFound } from "next/navigation";
import { getBrewery, listBeersByBrewery } from "@/lib/api";
import Badge from "@/components/Badge";

const DEFAULT_IMAGE = "/placeholder.svg";

export default async function BreweryDetailPage(
  props: PageProps<"/breweries/[id]">
) {
  const { id } = await props.params;
  const brewery = await getBrewery(id);

  if (!brewery) {
    notFound();
  }

  const { items: breweryBeers } = await listBeersByBrewery(brewery.id);
  const initial = brewery.name[0]?.toUpperCase() ?? "B";
  const yearsActive = new Date().getFullYear() - brewery.established;

  return (
    <div className="bg-white text-stone-900 min-h-screen flex flex-col">
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative h-80 w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover"
            alt={brewery.name}
            src={brewery.imageUrl ?? DEFAULT_IMAGE}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full px-6 pb-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-6">
              {/* Logo badge */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-white p-2 shadow-xl border-4 border-white mb-2 md:mb-0 flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-black text-stone-800">
                  {initial}
                </span>
              </div>
              <div className="flex-grow text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="material-symbols-outlined text-orange-400 text-base"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <span className="text-xs uppercase tracking-widest font-bold text-orange-400">
                    {brewery.type}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">
                  {brewery.name}
                </h1>
                <div className="flex items-center gap-4 text-stone-200 font-medium">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span>{brewery.city}, {brewery.country}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">calendar_month</span>
                    <span>Zal. {brewery.established}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mb-2">
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-full transition-all shadow-lg active:scale-95 flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-base"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    add
                  </span>
                  Sledovat
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold p-3 rounded-full transition-all border border-white/30">
                  <span className="material-symbols-outlined">share</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid: Story & Stats */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* About / Story */}
            <div className="lg:col-span-8 bg-white border border-stone-100 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-black tracking-tight mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-orange-600 rounded-full" />
                O pivovaru
              </h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                {brewery.description ?? "Žádný popis k dispozici."}
              </p>
            </div>

            {/* Stats sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                <span className="text-orange-600 text-5xl font-black mb-1">
                  {breweryBeers.length}
                </span>
                <span className="text-orange-800 font-bold uppercase tracking-widest text-xs">
                  Piv v katalogu
                </span>
              </div>
              <div className="bg-stone-50 border border-stone-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                <span className="text-stone-900 text-5xl font-black mb-1">
                  {yearsActive}
                </span>
                <span className="text-stone-500 font-bold uppercase tracking-widest text-xs">
                  Let na scéně
                </span>
              </div>
              <div className="bg-stone-900 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-orange-500">bolt</span>
                  Rychlé info
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between border-b border-stone-800 pb-2">
                    <span className="text-stone-400">Typ pivovaru</span>
                    <span className="font-medium text-stone-100">{brewery.type}</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-800 pb-2">
                    <span className="text-stone-400">Založen</span>
                    <span className="font-medium text-stone-100">{brewery.established}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-stone-400">Lokace</span>
                    <span className="font-medium text-stone-100">{brewery.city}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Beer List Section */}
        {breweryBeers.length > 0 && (
          <section className="bg-stone-50 py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex justify-between items-end mb-10">
                <div>
                  <h2 className="text-3xl font-black tracking-tight mb-2">
                    Piva z {brewery.name}
                  </h2>
                  <p className="text-stone-500">
                    {breweryBeers.length} {breweryBeers.length === 1 ? "pivo" : breweryBeers.length < 5 ? "piva" : "piv"} v katalogu
                  </p>
                </div>
                <Link
                  href="/beers"
                  className="text-orange-600 font-bold flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Všechna piva
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {breweryBeers.map((beer) => {
                  return (
                    <Link
                      key={beer.id}
                      href={`/beers/${beer.id}`}
                      className="bg-white rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-all border border-transparent hover:border-orange-200"
                    >
                      <div className="relative h-48 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          alt={beer.name}
                          src={beer.imageUrl ?? DEFAULT_IMAGE}
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-black text-xl group-hover:text-orange-600 transition-colors">
                              {beer.name}
                            </h3>
                            <p className="text-sm text-stone-500 italic">{beer.style}</p>
                          </div>
                          {beer.abv != null && (
                            <span className="bg-stone-100 px-2 py-1 rounded text-xs font-bold">
                              {beer.abv}% ABV
                            </span>
                          )}
                        </div>
                        {beer.description && (
                          <p className="text-sm text-stone-600 line-clamp-2 mb-4">
                            {beer.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
