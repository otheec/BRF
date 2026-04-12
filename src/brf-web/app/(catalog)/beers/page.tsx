import Link from "next/link";
import { listBeers } from "@/lib/api";
import PageHeader from "@/components/PageHeader";

const styleFilters = ["Vše", "IPA", "Stout", "Lager", "Sour", "Wheat", "Pilsner"];

const beerImages: Record<string, string> = {
  "c3d4e5f6-3333-4000-8000-000000000003":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDr8Ix8X6OWPSBemE9gu_dthZlYO3gB6WNn8bhHHVYx-ejjCeuxq7eteuqT9otMNuT5dt-fgQlpSa9FQ-n_lJqOnAinS9P6FyIuJHAd_p2fubP2-mI-nQlCs_MBN3Fz8SADQbrfB_EFTG-sMe7ZCul1VMw_yieElBhnUPnU6C8TTHfuz-FOiSMIgeoectTW8pwVpuVCgdZQtp5ycJIAqVhdIe2xGuD8ez3_0-HoUNQx-lHx0zhHuEqG7c3El2ADb4uWvGx-tT9_Iwo",
  "c3d4e5f6-3333-4000-8000-000000000004":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDS6XarVM3C1d536IXKyIe_hU_C90GHAd1VT8ghBL7RGhLU82Y-xeByQ2z6Nb41qeetYDA0cFr7fm3tEzyQf7FSsaipIYhggbvejQ4GkhGYZ5jI_eyUjYfzK4FVHYyD5Hf3gr6YSL6GrrEXBj-o3WMm5Nj8AWUONjQHqgIjwvB55tgtOPIaow15HF3HXM5IIQiTwkrnNZSGcWU7xDfbJIioEvwcZEQH7vD3DAPNTgW2FJyMAr6hvHVcI3I6WZiTze-Oxui-7CzmWQk",
  "c3d4e5f6-3333-4000-8000-000000000005":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDbwGVIaMSHyLvwszWxgsrzIyuiUCr8ls4-XQ3ghjWdSs1L9WAUip0YCmytun6SHJI_wx9rxGdsAGrIKwdwSjQhtTEE8wLXwDqg9CvERs0hHuURyYCgNsR7tYTjeOnhxBKe_YDHGxioRtGSoooaPkyBL4KubwrTD1qs-Da7F-PEObt94U2GL4SdWKmLOhDXMqXfl0Vz1RdvLe4mg2hDy9gt8xzl7uexd6TGRVffDCPV-oLdeMdYqWihSsa41LG4je8EH8-QDesVEGE",
  "c3d4e5f6-3333-4000-8000-000000000006":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDhC8F4yYlDpfgo5Ar6cqRmVcA8TW_GvXKbWvsykOCa6hwEGtgHEKXmxQSk9drBTv-UzGjIMVJW429z5mlGjC5VZrLhWg4Yr1na1Icp6J80jD1PZsfXpi0YRU1HagTDFAptJqf8mbyI5eG9ZXOBfognR9dT9KaeNXqXkxighZ6E7lggHW6qkq9lmZxc0fMUhu3qzZGmbghuoKJek56qisLv4Y_10FT21UEq2bJHNqxF114Oa78vKq5FRBYCq0M5xv2rxhRNHG2-9DE",
  "c3d4e5f6-3333-4000-8000-000000000007":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB3nmEcgssd4-GnJUYrNGmDeQbih521GrIjoFApYspQdUKASGuFisD-dDPLJJA2CcR4ffvYqZ19nVEu3let6JshqjIbzZi8i39o25-js4AGntq7QlRL7KwycIRoAb0r2Mc-M1-K9P0BorUU61Yk9SHOyuhfhyhc4e0vlvEQkdxDufg2dt7RVfnWix2IFk40nYSrg7q0n2lI8IgSni-GXSxhRPNrE7AORFhZl0OV7N5zWNSHxl-RlB00uK1dke7b92tnUCVD2L4JdsQ",
};

const defaultBeerImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDS6XarVM3C1d536IXKyIe_hU_C90GHAd1VT8ghBL7RGhLU82Y-xeByQ2z6Nb41qeetYDA0cFr7fm3tEzyQf7FSsaipIYhggbvejQ4GkhGYZ5jI_eyUjYfzK4FVHYyD5Hf3gr6YSL6GrrEXBj-o3WMm5Nj8AWUONjQHqgIjwvB55tgtOPIaow15HF3HXM5IIQiTwkrnNZSGcWU7xDfbJIioEvwcZEQH7vD3DAPNTgW2FJyMAr6hvHVcI3I6WZiTze-Oxui-7CzmWQk";

// Static ratings for display
const beerRatings: Record<string, string> = {
  "c3d4e5f6-3333-4000-8000-000000000003": "4.8",
  "c3d4e5f6-3333-4000-8000-000000000004": "4.6",
  "c3d4e5f6-3333-4000-8000-000000000005": "4.9",
  "c3d4e5f6-3333-4000-8000-000000000006": "4.5",
  "c3d4e5f6-3333-4000-8000-000000000007": "4.7",
  "c3d4e5f6-3333-4000-8000-000000000001": "4.8",
  "c3d4e5f6-3333-4000-8000-000000000002": "4.6",
  "c3d4e5f6-3333-4000-8000-000000000008": "4.3",
};

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
              const imgSrc = beerImages[beer.id] ?? defaultBeerImage;
              const rating = beerRatings[beer.id] ?? "4.5";
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
                      src={imgSrc}
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
                      <span className="text-xs font-bold text-stone-800">{rating}</span>
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
