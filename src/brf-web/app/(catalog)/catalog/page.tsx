import Link from "next/link";
import { listBreweries, listBeers, listVenues } from "@/lib/api";

const DEFAULT_IMAGE = "/placeholder.svg";

export default async function CatalogPage() {
  const [breweriesRes, beersRes, venuesRes] = await Promise.all([
    listBreweries(0, 4),
    listBeers(0, 4),
    listVenues(0, 3),
  ]);

  const breweries = breweriesRes.items;
  const beers = beersRes.items;
  const venues = venuesRes.items;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Search Section */}
        <section className="relative py-16 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-stone-900 mb-6">
              Objevte svůj příští <span className="text-orange-600">oblíbený doušek</span>.
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-10">
              Prohlédněte si řemeslné pivovary, vzácné ležáky a místní výčepy vybrané naší komunitou pivovarů.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm font-semibold shadow-sm hover:border-orange-200 transition-colors cursor-pointer">IPA</span>
              <span className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm font-semibold shadow-sm hover:border-orange-200 transition-colors cursor-pointer">Stouts</span>
              <span className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm font-semibold shadow-sm hover:border-orange-200 transition-colors cursor-pointer">Sours</span>
              <span className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm font-semibold shadow-sm hover:border-orange-200 transition-colors cursor-pointer">Místní výčepy</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent -z-10"></div>
        </section>

        {/* Featured Breweries */}
        <section className="py-12 px-6 max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-stone-900">Doporučené pivovary</h2>
              <p className="text-stone-500">Mistři řemesla, kteří teď letí v komunitě.</p>
            </div>
            <Link className="text-orange-600 font-bold flex items-center gap-1 hover:gap-2 transition-all" href="/breweries">
              Zobrazit vše <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {breweries[0] && (
              <Link
                href={`/breweries/${breweries[0].id}`}
                className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-xl aspect-square md:aspect-auto min-h-[320px]"
              >
                <img src={breweries[0].imageUrl ?? DEFAULT_IMAGE} alt={breweries[0].name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <span className="inline-block px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full w-fit mb-3">{breweries[0].type}</span>
                  <h3 className="text-3xl font-bold text-white mb-2">{breweries[0].name}</h3>
                  <p className="text-stone-200 text-sm mb-4">{breweries[0].city}, {breweries[0].country} • {breweries[0].description}</p>
                  <span className="bg-white text-stone-900 px-6 py-2 rounded-full font-bold text-sm w-fit hover:bg-orange-50 transition-colors">Prozkoumat kolekci</span>
                </div>
              </Link>
            )}
            {breweries[1] && (
              <Link
                href={`/breweries/${breweries[1].id}`}
                className="md:col-span-2 group relative overflow-hidden rounded-xl h-64"
              >
                <img src={breweries[1].imageUrl ?? DEFAULT_IMAGE} alt={breweries[1].name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{breweries[1].name}</h3>
                  <p className="text-stone-300 text-xs">{breweries[1].city}, {breweries[1].country} • {breweries[1].description}</p>
                </div>
              </Link>
            )}
            {breweries.slice(2, 4).map((brewery, index) => (
              <Link
                key={brewery.id}
                href={`/breweries/${brewery.id}`}
                className="group relative overflow-hidden rounded-xl h-64"
              >
                <img src={brewery.imageUrl ?? DEFAULT_IMAGE} alt={brewery.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
                  <h3 className="text-lg font-bold text-white">{brewery.name}</h3>
                  <p className="text-stone-300 text-xs">{brewery.city}, {brewery.country}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Top-Rated Beers */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-stone-900">Nejlépe hodnocená piva</h2>
                <p className="text-stone-500">Nejvyšší hodnocení od komunity Brewfolio tento týden.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {beers.map((beer, index) => (
                <Link key={beer.id} href={`/beers/${beer.id}`} className="flex flex-col group">
                  <div className="aspect-[4/5] rounded-2xl mb-4 overflow-hidden relative">
                    <img src={beer.imageUrl ?? DEFAULT_IMAGE} alt={beer.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-lg leading-tight group-hover:text-orange-600 transition-colors">{beer.name}</h3>
                  <p className="text-stone-500 text-sm mb-2">{beer.style}{beer.abv ? ` • ${beer.abv}% ABV` : ""}</p>
                  <div className="flex items-center gap-2 mt-auto">
                    <div className="w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center">
                      <span className="text-[10px] font-black text-stone-600">{beer.breweryName.charAt(0)}</span>
                    </div>
                    <span className="text-xs font-medium text-stone-700">{beer.breweryName}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Venues */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-stone-900">Oblíbená místa</h2>
              <p className="text-stone-500">Nejlepší místa, kde si vychutnat čerstvé pivo ve vašem okolí.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {venues.map((venue, index) => (
              <div key={venue.id} className="bg-white p-2 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 rounded-xl mb-4 relative overflow-hidden">
                  <img src={venue.imageUrl ?? DEFAULT_IMAGE} alt={venue.name} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-orange-600 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">{venue.type}</span>
                  </div>
                </div>
                <div className="px-3 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-lg">{venue.name}</h3>
                    <div className="flex items-center gap-1 text-orange-600">
                      <span className="material-symbols-outlined text-xs">location_on</span>
                      <span className="text-xs font-semibold">{venue.city}</span>
                    </div>
                  </div>
                  {venue.description && (
                    <p className="text-stone-500 text-sm mb-4 line-clamp-2">{venue.description}</p>
                  )}
                  <Link href={`/venues/${venue.id}`} className="block w-full py-2 border border-stone-200 rounded-lg text-sm font-bold text-stone-700 hover:bg-stone-50 transition-colors text-center">Detail místa</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 px-6 bg-stone-900 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <span className="material-symbols-outlined text-5xl text-orange-500 mb-6 block">sports_bar</span>
            <h2 className="text-3xl font-black mb-4">Zůstaňte v obraze</h2>
            <p className="text-stone-400 mb-8">Každý pátek vám pošleme novinky o čerstvých pivech, nových pivovarech a exkluzivních událostech.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input className="flex-grow px-6 py-3 bg-stone-800 border-stone-700 rounded-full focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Zadejte váš e-mail" type="email" />
              <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 transition-colors rounded-full font-bold" type="submit">Přihlásit se k odběru</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
