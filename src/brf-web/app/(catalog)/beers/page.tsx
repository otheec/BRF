import Link from "next/link";
import { beers, breweries } from "@/lib/mock-data";
import Badge from "@/components/Badge";

const filterChips = ["All", "IPA", "Stout", "Lager", "Sour"];

export default function BeersPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1
            className="text-3xl md:text-4xl font-extrabold text-[#e5e2e1] mb-2"
            style={{ fontFamily: "Epilogue, sans-serif" }}
          >
            Beers
          </h1>
          <p className="text-[#9e8e7a]">{beers.length} beers in the catalog</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {filterChips.map((chip) => (
            <button
              key={chip}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                chip === "All"
                  ? "bg-[#ffbe5b]/15 text-[#ffbe5b] border border-[#ffbe5b]/30"
                  : "bg-[#2a2a2a] text-[#d6c4ae] hover:bg-[#353535] hover:text-[#e5e2e1]"
              }`}
            >
              {chip}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {beers.map((beer) => {
            const brewery = breweries.find((b) => b.id === beer.breweryId);
            return (
              <Link
                key={beer.id}
                href={`/beers/${beer.id}`}
                className="bg-[#1c1b1b] rounded-xl p-5 hover:bg-[#20201f] transition-colors group"
              >
                <div className="flex items-start justify-between mb-3">
                  <Badge label={beer.style} variant="style" />
                  <span className="text-xs font-medium text-[#9e8e7a]">
                    {beer.abv}%
                  </span>
                </div>
                <h2
                  className="font-bold text-[#e5e2e1] group-hover:text-[#ffbe5b] transition-colors mb-1"
                  style={{ fontFamily: "Epilogue, sans-serif" }}
                >
                  {beer.name}
                </h2>
                <p className="text-xs text-[#9e8e7a] mb-3">{brewery?.name}</p>
                <p className="text-sm text-[#d6c4ae] line-clamp-2 leading-relaxed">
                  {beer.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
