import Link from "next/link";
import { listBreweries } from "@/lib/api";
import PageHeader from "@/components/PageHeader";

const DEFAULT_IMAGE = "/placeholder.svg";

export default async function BreweriesPage() {
  const { items: allBreweries } = await listBreweries(0, 50);

  return (
    <div className="bg-stone-50 min-h-screen">
      <PageHeader
        title="Všechny pivovary"
        subtitle="Prozkoumejte nejlepší světové producenty řemeslného piva"
      />

      {/* Brewery Grid */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allBreweries.map((brewery) => (
              <Link
                key={brewery.id}
                href={`/breweries/${brewery.id}`}
                className="bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
              >
                <div className="h-32 relative overflow-hidden">
                  <img src={brewery.imageUrl ?? DEFAULT_IMAGE} alt={brewery.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-stone-900 group-hover:text-orange-700 transition-colors">
                        {brewery.name}
                      </h3>
                      <p className="text-xs text-stone-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">location_on</span>
                        {brewery.city}, {brewery.country}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-stone-100 text-stone-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      {brewery.type}
                    </span>
                    <span className="bg-stone-100 text-stone-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      Zal. {brewery.established}
                    </span>
                  </div>
                  {brewery.description && (
                    <p className="text-xs text-stone-500 line-clamp-2">{brewery.description}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
