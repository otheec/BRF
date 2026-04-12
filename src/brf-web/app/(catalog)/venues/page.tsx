import Link from "next/link";
import { listVenues } from "@/lib/api";

const venueImages: Record<string, string> = {
  "b2c3d4e5-2222-4000-8000-000000000001":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB50s_oifOuYdoNfLTdP1bdFhC-bdnrKSgOxk4cV_ykwSdjkxw8Wr8rhIxpHJ_tv_6dnInzMAxzoMyVs7QZWd5yr9xhD3v9KzpPySmR15ERvsSqe1Mok_j6oNI0ttScVOnv1zs5UjCcG7u22Fv4m5C6VoSUvrIl0pt9e4hMU_5cQ5sQmr94JzDiYGqJqDEEY4Gil0MH-r0lGsRmwfy4ZHtq-Ilc1WEkVN2EZTOtm5drNIeUF6nrmyt2Y4-aDTU7aYVGdhnxj5JX7_o",
  "b2c3d4e5-2222-4000-8000-000000000002":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCButaa4XOJkUVxrwiclokgXk_LBeczQjootEyyvnOI1DJT-WVfIDHqykhEB2_jEMj13XH6vVuSuAJOc_R2SK9MUnQZpPhMYTfBPCSB5hGDDLr8aj0xBK8lQvDp47NM92JkBOkltj9Uiuqy8VGNaPydNwoO1aZOjTXhu9eOH0fQceHvEhDAl_GaqiKxI11pDdCMORp_PvMHlI2Juuz1wNLjD6iAFmJx_a8ycdHRmNYr-yPVnI-7zDgKwlQRhtKD6kI25pHZKE_JOqs",
  "b2c3d4e5-2222-4000-8000-000000000003":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ0gc4MyRnza3J40Fvz52_6HeaY-K8BOdGuQ_tLadPG3IhPbowP_80UIPB6hHioKBFFaRYaB6UAkoqDjB6RZpSLglDG-CFSOLcUY_YYm8RtjPpI4p15RuvftFObMVgyT_KYQaV471GpvA4iK2iWIboTuTXQ24OgtPBnZzvHcEj2ozOnFm7qtD2BJPB5rIEWTSGTTqaB_kEl5ABZd0Hu-iGg-oD2YNxOkBL3EEWLGxDciBgG8lfhpY9Q0iVbcUGJi1AoAuU7C62uuo",
  "b2c3d4e5-2222-4000-8000-000000000004":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDXpUf3aE0299VSiPYCRRezSYL6KiVVaSFMST0imYKTndHG14ONOOj2hc02NTCGbviaXyWi9lZXZ0esFss-dxyk5Mc30ckhxcdUYyxRju9URAXYUcPhUsVR0Q_dEvJdkDP7cBHwxRu925e7fl6Gu1bbTjA5F1aznl-xAWPFvi6dC1XeaFppbcub5MP9vH09rr6p2avOIgmnUyVCtwM8fEuNO5UeyJJrH1wYlEjz-klrcJpeXiIyFPMV7-rklno8keATZJx-eTg6m9o",
};

const defaultVenueImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB50s_oifOuYdoNfLTdP1bdFhC-bdnrKSgOxk4cV_ykwSdjkxw8Wr8rhIxpHJ_tv_6dnInzMAxzoMyVs7QZWd5yr9xhD3v9KzpPySmR15ERvsSqe1Mok_j6oNI0ttScVOnv1zs5UjCcG7u22Fv4m5C6VoSUvrIl0pt9e4hMU_5cQ5sQmr94JzDiYGqJqDEEY4Gil0MH-r0lGsRmwfy4ZHtq-Ilc1WEkVN2EZTOtm5drNIeUF6nrmyt2Y4-aDTU7aYVGdhnxj5JX7_o";

const mapBgImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAQeVvaJ9-IaEmPbaEDSni7j7XqUBxZ4bPtMGQk_NQVyPMmuA8Mgu-lpOraVoMTp_md6rN4tZUeE9Z-inTkkhdB8uA0mREs-NDw52JowQMpziYb9xwXH1gb50T8RcMajc_Y9fTQ-ptJ6grLQ2WzF5Du6SGeA3A4SvKQNbbnMvabOsWOGo00RWasci8B4MWWVkT1yAgzL_ALYXrf9hU17nsX3yqlkX_q35zU05DXo5WooWiGy1c1UuqGBacUkgu_iLe1ZYHFeNJCG4I";

const amenityIconMap: Record<string, string> = {
  "Dog Friendly": "pets",
  "Outdoor Seating": "wb_sunny",
  Food: "restaurant",
  WiFi: "wifi",
};

// Venue type display labels
const typeLabel: Record<string, string> = {
  Taproom: "Výčep",
  Brewpub: "Pivnice",
  BottleShop: "Lahvový obchod",
  Other: "Ostatní",
};

// Open/closed by index: 0,1,3 open; 2 closed
const isOpenByIndex = (index: number) => index !== 2;

export default async function VenuesPage() {
  const { items: allVenues } = await listVenues(0, 50);
  return (
    <main className="flex h-[calc(100vh-65px)] overflow-hidden">
      <section className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {/* List Side */}
        <div className="w-full md:w-[450px] lg:w-[500px] flex flex-col bg-white border-r border-stone-200 overflow-y-auto z-10">
          {/* Sticky filter header */}
          <div className="p-6 sticky top-0 bg-white/80 backdrop-blur-md z-20 border-b border-stone-100">
            <h1 className="text-2xl font-black text-stone-900 mb-4">Najděte místo</h1>

            {/* Search */}
            <div className="relative mb-4">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-lg">
                search
              </span>
              <input
                type="text"
                placeholder="Hledat místa..."
                className="w-full pl-10 pr-4 py-2.5 bg-stone-100 rounded-xl text-sm text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Venue type filter pills */}
            <div className="flex flex-wrap gap-2 mb-3">
              {["Všechny typy", "Výčep", "Lahvový obchod", "Pivnice"].map((t) => (
                <button
                  key={t}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    t === "Všechny typy"
                      ? "bg-orange-600 text-white"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Amenity filters */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: "pets", label: "Přátelské psům" },
                { icon: "wb_sunny", label: "Venkovní sezení" },
                { icon: "restaurant", label: "Jídlo" },
              ].map((a) => (
                <button
                  key={a.label}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">{a.icon}</span>
                  {a.label}
                </button>
              ))}
            </div>
          </div>

          {/* Venue Cards */}
          <div className="px-6 pb-20 pt-4 space-y-4">
            {allVenues.map((venue, index) => {
              const imgSrc = venueImages[venue.id] ?? defaultVenueImage;
              const open = isOpenByIndex(index);

              return (
                <Link
                  key={venue.id}
                  href={`/venues/${venue.id}`}
                  className="group relative bg-white border border-stone-200 rounded-2xl p-4 hover:shadow-xl transition-all cursor-pointer overflow-hidden block"
                >
                  <div className="flex gap-4">
                    {/* Venue image */}
                    <div
                      className={`w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 ${
                        !open ? "grayscale opacity-80" : ""
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imgSrc}
                        alt={venue.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Venue details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        {/* Type badge */}
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-orange-50 text-orange-600">
                          {typeLabel[venue.type] ?? venue.type}
                        </span>
                        {/* Open/closed */}
                        <span
                          className={`text-xs font-bold tracking-wide ${
                            open ? "text-emerald-600" : "text-stone-400"
                          }`}
                        >
                          {open ? "OTEVŘENO" : "ZAVŘENO"}
                        </span>
                      </div>

                      <h3 className="font-bold text-stone-900 mt-1 truncate">{venue.name}</h3>

                      <p className="flex items-center gap-0.5 text-stone-500 text-xs mt-1">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        {venue.city}, {venue.country}
                      </p>

                      {/* Amenities */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {venue.amenities.map((amenity) => (
                          <span
                            key={amenity}
                            className="flex items-center gap-0.5 text-stone-400"
                            title={amenity}
                          >
                            <span className="material-symbols-outlined text-sm">
                              {amenityIconMap[amenity] ?? "check_circle"}
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Map Side */}
        <div className="flex-1 relative bg-stone-200 hidden md:block">
          {/* Map background */}
          <div
            className="absolute inset-0 grayscale opacity-40"
            style={{
              backgroundImage: `url(${mapBgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Map markers */}
          {/* Marker 1 - Rusty Anchor */}
          <div className="absolute top-[30%] left-[40%] z-10 group">
            <div className="w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
              <span
                className="material-symbols-outlined text-white text-lg"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                sports_bar
              </span>
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white text-stone-900 text-xs font-semibold px-2 py-1 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              The Rusty Anchor
            </div>
          </div>

          {/* Marker 2 - Iron Forge */}
          <div className="absolute top-[55%] left-[25%] z-10 group">
            <div className="w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
              <span
                className="material-symbols-outlined text-white text-lg"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                restaurant
              </span>
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white text-stone-900 text-xs font-semibold px-2 py-1 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Iron Forge Brewery
            </div>
          </div>

          {/* Map controls */}
          <div className="absolute bottom-8 right-6 flex flex-col gap-2 z-10">
            <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center text-stone-700 hover:bg-stone-50 transition-colors font-bold text-lg">
              +
            </button>
            <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center text-stone-700 hover:bg-stone-50 transition-colors font-bold text-lg">
              −
            </button>
            <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center text-stone-600 hover:bg-stone-50 transition-colors">
              <span className="material-symbols-outlined text-lg">my_location</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
