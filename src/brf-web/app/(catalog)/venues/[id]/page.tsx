import Link from "next/link";
import { notFound } from "next/navigation";
import { getVenueById, venues } from "@/lib/mock-data";
import Badge from "@/components/Badge";

export function generateStaticParams() {
  return venues.map((v) => ({ id: v.id }));
}

const amenityIcons: Record<string, string> = {
  "Dog Friendly": "🐕",
  "Outdoor Seating": "🌿",
  Food: "🍔",
  WiFi: "📶",
};

const openingHours = [
  { days: "Monday – Thursday", hours: "3:00 PM – 10:00 PM" },
  { days: "Friday – Saturday", hours: "12:00 PM – 12:00 AM" },
  { days: "Sunday", hours: "12:00 PM – 8:00 PM" },
];

export default async function VenueDetailPage(
  props: PageProps<"/venues/[id]">
) {
  const { id } = await props.params;
  const venue = getVenueById(id);

  if (!venue) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <Link
          href="/venues"
          className="inline-flex items-center gap-1 text-sm text-[#9e8e7a] hover:text-[#ffbe5b] transition-colors mb-8"
        >
          ← Back to Venues
        </Link>

        {/* Header */}
        <div className="bg-[#1c1b1b] rounded-2xl p-8 mb-6">
          <div className="mb-4">
            <Badge label={venue.type} variant="type" />
          </div>
          <h1
            className="text-4xl md:text-5xl font-extrabold text-[#e5e2e1] mb-2"
            style={{ fontFamily: "Epilogue, sans-serif" }}
          >
            {venue.name}
          </h1>
          <p className="text-[#9e8e7a] text-lg mb-4">
            {venue.city}, {venue.country}
          </p>
          <p className="text-[#d6c4ae] text-lg leading-relaxed">
            {venue.description}
          </p>
        </div>

        {/* Amenities */}
        <div className="bg-[#1c1b1b] rounded-2xl p-8 mb-6">
          <h2
            className="text-xl font-bold text-[#e5e2e1] mb-5"
            style={{ fontFamily: "Epilogue, sans-serif" }}
          >
            Amenities
          </h2>
          <div className="flex flex-wrap gap-4">
            {venue.amenities.map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-2 bg-[#20201f] rounded-lg px-4 py-3"
              >
                <span className="text-xl">{amenityIcons[amenity] ?? "✓"}</span>
                <span className="text-sm font-medium text-[#d6c4ae]">
                  {amenity}
                </span>
              </div>
            ))}
            {venue.amenities.length === 0 && (
              <p className="text-sm text-[#9e8e7a]">No amenities listed.</p>
            )}
          </div>
        </div>

        {/* Opening Hours */}
        <div className="bg-[#1c1b1b] rounded-2xl p-8">
          <h2
            className="text-xl font-bold text-[#e5e2e1] mb-5"
            style={{ fontFamily: "Epilogue, sans-serif" }}
          >
            Opening Hours
          </h2>
          <div className="divide-y divide-[#514534]/40">
            {openingHours.map((row) => (
              <div
                key={row.days}
                className="flex items-center justify-between py-3"
              >
                <span className="text-sm text-[#d6c4ae]">{row.days}</span>
                <span className="text-sm font-medium text-[#e5e2e1]">
                  {row.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
