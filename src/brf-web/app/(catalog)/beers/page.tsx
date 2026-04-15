import Link from "next/link";
import { listBeers } from "@/lib/api";
import PageHeader from "@/components/PageHeader";

const styleFilters = ["Vše", "IPA", "Stout", "Lager", "Sour", "Wheat", "Pilsner"];

const DEFAULT_IMAGE = "/placeholder.svg";

export default async function BeersPage() {
  const { items: allBeers } = await listBeers(0, 50);
  return (
    <div className="bg-stone-50 min-h-screen">
      <PageHeader
        title="Objevte každý doušek"
        subtitle="Prozkoumejte náš katalog řemeslných piv — od chmelových IPA přes bohaté stouty až po vše mezi tím."
      >
        {/* Style filter pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {styleFilters.map((filter) => (
            <button
              key={filter}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                filter === "Vše"
                  ? "bg-orange-600 text-white shadow-sm"
                  : "bg-white text-stone-600 border border-stone-200 hover:border-orange-300 hover:text-orange-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </PageHeader>

      {/* Beers Grid */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {allBeers.map((beer) => {
              const initial = beer.breweryName?.[0]?.toUpperCase() ?? "B";

              return (
                <Link
                  key={beer.id}
                  href={`/beers/${beer.id}`}
                  className="group cursor-pointer"
                >
                  {/* Image container */}
                  <div className="aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden relative mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={beer.imageUrl ?? DEFAULT_IMAGE}
                      alt={beer.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Rating badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                      <span
                        className="material-symbols-outlined text-amber-400 text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span className="text-xs font-bold text-stone-800">—</span>
                    </div>
                  </div>

                  {/* Card content */}
                  <h2 className="font-bold text-lg text-stone-900 group-hover:text-orange-600 transition-colors leading-snug mb-1">
                    {beer.name}
                  </h2>
                  <p className="text-stone-500 text-sm mb-2">
                    {beer.style} &middot; {beer.abv}% ABV
                  </p>
                  {/* Brewery row */}
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 bg-stone-800 flex items-center justify-center">
                      <span className="text-[10px] text-white font-black">{initial}</span>
                    </div>
                    <span className="text-stone-500 text-sm truncate">{beer.breweryName}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
