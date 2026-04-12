import { notFound } from "next/navigation";
import { getVenueById, venues } from "@/lib/mock-data";

export function generateStaticParams() {
  return venues.map((v) => ({ id: v.id }));
}

const amenityConfig: Record<string, { icon: string; label: string }> = {
  "Dog Friendly": { icon: "pets", label: "Přátelské psům" },
  "Outdoor Seating": { icon: "potted_plant", label: "Venkovní sezení" },
  Food: { icon: "restaurant", label: "Jídelní lístek" },
  WiFi: { icon: "wifi", label: "Bezplatné WiFi" },
};

const MOCK_TAP_ITEMS = [
  { tap: "01", name: "Obsidian Stout", style: "Dry Stout", abv: 6.2, ibu: 45, price: "150 Kč", size: "0,5l" },
  { tap: "02", name: "Pacific Haze IPA", style: "Hazy IPA", abv: 7.5, ibu: 60, price: "180 Kč", size: "0,5l" },
  { tap: "03", name: "Golden Harvest Lager", style: "Pilsner", abv: 4.8, ibu: 20, price: "130 Kč", size: "0,5l" },
  { tap: "04", name: "Ruby Slipper Sour", style: "Raspberry Gose", abv: 4.2, ibu: 10, price: "190 Kč", size: "0,4l" },
];

const OPENING_HOURS = [
  { days: "Po – Čt", hours: "12:00 – 22:00", highlight: false },
  { days: "Pá – So", hours: "12:00 – 00:00", highlight: true },
  { days: "Neděle", hours: "11:00 – 21:00", highlight: false },
];

const VENUE_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBVEDQPJbQGdvGQSrCPPM9tRwr6sHddb-cCZ-L0r9XIjqYX8vimVLT1wxq5RueKFA9BUxjvBG14Ezkji0GPRYW9F1wlZFKiK7OtYj0ag3YPeg8P7ZKQeuQybWmbZvpeWMc_GtGCIFSor54KxAwSpa_1NueNUeD-sI2jtMjB2yUJOhv1FBHx2f2SQprb2w1zvrtnLMqo9ifl-S2ac3_4cISrITAnWmQ3CDIhiQ9NXiAQYY-gm-QKoE52JTInJpex2X9H7ZdiWp9Ae28";

const GALLERY_IMAGES = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEGaDGqxRJkkZuquzWHquAcDSoV5Fifnd9FQ5C6JE8LXty5L0OtYW7dUDV24rGpfx8YeKlJxxusjYZ14wv6tbLHFlCWXMA0jDwCLtDyWhGTs76uM5fovaz5JvcJNRWPztk0tVoUSETzVVA3VaRG73Cr2g3PxpEuUN4wyteX69vBV7FAvlJu9wPZS13UQHuTkn8KGtSeIAswnh4LH47zGZhgYR4wASalHyKN-oAgK4_GN5964zCd5pZCuoo1IbxEiCQdMYZbYWIxJQ",
    alt: "Main Lounge",
    span: true,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVeDFQeLJuxzfFIVBo_JmJBRMNVFjpzlrWz4rgmBTiyatClheekYdlFWAolPeiD6W4n32V7XbV4Kndh30VDQ4gwipV4Csbu-4znyo49D_lJ7NKce018kZftCi4_gOtaeD2cJlQCvdTkYAZ2sg--FKyMPC9wJ0xLOjfi3EzQoXHg-ftarJplK8rL3bHIKVHr6heRenfvp_WtPqC-CU8v3c2zyvry88hcypREY_7gn6-_BLiWaw_ro4dJyX22482es91oSWlvsQASdY",
    alt: "Beer Detail",
    span: false,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLw4UPFZypFSEnHqvI_Ch88m1CPfaZXYjJjIyoObPUeSVzCv68DMjlS3OukTvk0zgryqrD1KW28ascnJyvMy7heXBDfBGhidU0mLwPN3mEBYxgWLYb5hCzlvRm6ZJz-35TbqVXtgpTfJw4sPK881KtEpcdq7aIrrJ62Of7x0BWTM2XVx-LRmXL1V35A82VfCbYejT0t46GZIz0FKng6cDBfFZd6TjXyp4nzH6ORp6GM8rkXxwl4cv7e-ou54KDOU0PrdaiKz4J8wc",
    alt: "Outdoor Deck",
    span: false,
  },
];

const MAP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDEqT-Nf8SzL3rMkPbaLpp1hWCSQ43JXPlXP2sioKzfrpOn43Gj20AOM06TxxoCo2pd584fomZ4iVzCyxNvdCr4m0vCbJxJRcvdaaeoqriWQ_xc0JQZlmXdK26-Wwj6_HAbU5iOlIL5VkrLjoJo9zJXSlmYMacqGWTewRVfgg4Y2pc0U0civf6a72pD64BuZqkySzve_svd4wdxSMFHdBHtWduUq0TzC8_tJMLR5xSjhktm3UNJdU3RFjRN3XH3tSNR9qKhXruzooQ";

export default async function VenueDetailPage(props: PageProps<"/venues/[id]">) {
  const { id } = await props.params;
  const venue = getVenueById(id);

  if (!venue) {
    notFound();
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative h-[400px] w-full overflow-hidden">
          <img
            alt={venue.name}
            className="w-full h-full object-cover"
            src={VENUE_HERO_IMAGE}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
            <div className="max-w-7xl mx-auto">
              <span className="inline-block px-3 py-1 bg-orange-600 text-white text-xs font-bold tracking-widest uppercase rounded mb-4">
                {venue.type}
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-2 leading-tight">
                {venue.name}
              </h1>
              <div className="flex flex-col md:flex-row md:items-center text-gray-200 space-y-2 md:space-y-0 md:space-x-6">
                <div className="flex items-center">
                  <span className="material-symbols-outlined mr-2">location_on</span>
                  <span className="text-sm font-medium">{venue.city}, {venue.country}</span>
                </div>
                <div className="flex items-center">
                  <span className="material-symbols-outlined mr-2">schedule</span>
                  <span className="text-sm font-medium">Otevřeno do 23:00</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all active:scale-95">
              <span className="material-symbols-outlined mr-2">directions</span>
              Navigovat
            </button>
            <button className="flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-bold py-4 px-8 rounded-xl shadow-lg transition-all active:scale-95">
              <span className="material-symbols-outlined mr-2">language</span>
              Navštívit web
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-8">
            {/* What's on Tap */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black text-gray-900 flex items-center">
                  <span className="material-symbols-outlined mr-3 text-orange-600">ink_highlighter</span>
                  Co je na čepu
                </h2>
                <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse" />
                  ŽIVĚ AKTUALIZOVÁNO
                </span>
              </div>
              <div className="space-y-4">
                {MOCK_TAP_ITEMS.map((item) => (
                  <div
                    key={item.tap}
                    className="group flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:border-orange-200 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 font-bold text-xl mr-4">
                        {item.tap}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500">
                          {item.style} • {item.abv}% ABV • {item.ibu} IBU
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-xl text-gray-900">{item.price}</div>
                      <div className="text-[10px] font-bold text-orange-600 uppercase tracking-tighter">
                        {item.size}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                <span className="material-symbols-outlined mr-3 text-orange-600">imagesmode</span>
                Galerie místa
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {GALLERY_IMAGES.map((img) => (
                  <div
                    key={img.alt}
                    className={`overflow-hidden rounded-xl ${img.span ? "col-span-2 row-span-2" : "h-48"}`}
                  >
                    <img
                      alt={img.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      src={img.src}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Amenities */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-black text-gray-900 mb-6">Vybavení</h3>
              <div className="grid grid-cols-2 gap-4">
                {venue.amenities.map((amenity) => {
                  const config = amenityConfig[amenity] ?? { icon: "check_circle", label: amenity };
                  return (
                    <div
                      key={amenity}
                      className="flex flex-col items-center p-4 bg-white rounded-xl border border-gray-100"
                    >
                      <span className="material-symbols-outlined text-orange-600 mb-2">
                        {config.icon}
                      </span>
                      <span className="text-xs font-bold text-gray-700 text-center">{config.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Location Map */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-black text-gray-900 mb-2">Poloha</h3>
                <p className="text-sm text-gray-500">{venue.city}, {venue.country}</p>
              </div>
              <div className="h-64 bg-gray-200">
                <img
                  alt="Poloha na mapě"
                  className="w-full h-full object-cover"
                  src={MAP_IMAGE}
                />
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-gray-900 text-white rounded-2xl p-6">
              <h3 className="text-lg font-black mb-4">Otevírací hodiny</h3>
              <div className="space-y-3">
                {OPENING_HOURS.map((row) => (
                  <div
                    key={row.days}
                    className={`flex justify-between text-sm ${row.highlight ? "font-bold text-orange-500" : ""}`}
                  >
                    <span className={row.highlight ? "" : "text-gray-400"}>{row.days}</span>
                    <span className={row.highlight ? "" : "font-medium"}>{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
