import Link from "next/link";
import { venues } from "@/lib/mock-data";
import Badge from "@/components/Badge";

const filterChips = [
  "All",
  "Taproom",
  "Brewpub",
  "Bottle Shop",
  "Other",
];

const amenityIcons: Record<string, string> = {
  "Dog Friendly": "🐕",
  "Outdoor Seating": "🌿",
  Food: "🍔",
  WiFi: "📶",
};

export default function VenuesPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1
            className="text-3xl md:text-4xl font-extrabold text-[#e5e2e1] mb-2"
            style={{ fontFamily: "Epilogue, sans-serif" }}
          >
            Venues
          </h1>
          <p className="text-[#9e8e7a]">{venues.length} venues in the catalog</p>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {venues.map((venue) => (
            <Link
              key={venue.id}
              href={`/venues/${venue.id}`}
              className="bg-[#1c1b1b] rounded-xl p-6 hover:bg-[#20201f] transition-colors group"
            >
              <div className="flex items-start justify-between mb-3">
                <Badge label={venue.type} variant="type" />
              </div>
              <h2
                className="font-bold text-[#e5e2e1] group-hover:text-[#ffbe5b] transition-colors mb-1"
                style={{ fontFamily: "Epilogue, sans-serif" }}
              >
                {venue.name}
              </h2>
              <p className="text-xs text-[#9e8e7a] mb-3">
                {venue.city}, {venue.country}
              </p>
              <p className="text-sm text-[#d6c4ae] mb-4 line-clamp-2 leading-relaxed">
                {venue.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {venue.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="inline-flex items-center gap-1 text-xs text-[#9e8e7a]"
                  >
                    <span>{amenityIcons[amenity] ?? "✓"}</span>
                    <span>{amenity}</span>
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
