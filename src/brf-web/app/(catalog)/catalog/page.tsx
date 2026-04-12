import Link from "next/link";
import { listBreweries, listBeers, listVenues } from "@/lib/api";

const breweryImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBpYzT7k3SLdciwFQTJfYRKsyeRqTm5rwV1KSl6XhKK3bqwQXEghzPykxDUqlHIgNBksqhRfxsXSatdv02XC85G9vVveHsohIYjXrBzBovPbF1tNn2ZFQXYVuKB3FxgZV_LpDxAz_L6Uc6JtxuLrFeZulrARCN2I4DXhxFb2KhMY40kLxsSd4O57yAyZdwCCrHrw8otnOHbJN1TRFtxxkzGGTqAXMj9AqCQAHIJXOUdf3P2B-bCOMcdttCDqMjROaW1IfIMq74HhL8",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC88OJvb4OLwhxXc4u29g5plNCRw03GKqkSLCQTkOR9cqxC7JpJr3jGvape9K-6nzsa6IgnbJE6gpKCoabkJhsgfaD6Rk7ycooJcBRMqbwtXKab8Ely3_QZgijP1yQ3isDYEYAsk25obbpRtgIM0KFF-FCyXfdSQDKf91ajh6_QCfjphEejX-FWqKSRAXAreL-9OwclwSonP2OLWwbhq33BsnPtKVfwwublNnMZPmib-e91ugLOEijCUwvZvuiwCxcePPF2fYhVu0Q",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBdKEb839yRyR9CCZvbOhuPV_bDn_NE6DNQiocUmbEWkxG87mTq-r4uOY_dpU-8BjubT2vl9CDiwKnrawy1zQjcX1l44sDR57ALkJo5RP28JdX8ByBVwcCD3RLzaULkZoWK5g1GVwc9hDa0cxiGbP6uWp8CnKHWVaCId4IwynaO2J-Xq_xaoTqBBVWXx_MbpoxlZAa_p9n1IyKcJ37y7QhTc5ptyf1FhF9q7Vzw4hV4udaaHbZ-LX5AP1ZYpN3Aea7VL5aoMRXUwWY",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDawLTyqAQ-yRIrGLRHc-d8QT-b1xpcpAz1wrmBZoAJVAikNCG_bCXEztWxF85_1ONc6KALqk5-lP1b49tjlX-3QYQnczhV1JwGr05B5FW7aNmLEhockXilOSPp-nchahEOOJZtQqk8mK-YyyXeplMVvWjsGlmLTUVavYFUIUGVPTHdJXtW3uhVnT8AhD8fcayv3wobRG3DLLV65nwWvUJzCkUDcUNpRV_Fchksef1QQvKZsQnoqhg2ltY-KF2cfw_jAF-2jeA45_A",
];

const beerImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDS6XarVM3C1d536IXKyIe_hU_C90GHAd1VT8ghBL7RGhLU82Y-xeByQ2z6Nb41qeetYDA0cFr7fm3tEzyQf7FSsaipIYhggbvejQ4GkhGYZ5jI_eyUjYfzK4FVHYyD5Hf3gr6YSL6GrrEXBj-o3WMm5Nj8AWUONjQHqgIjwvB55tgtOPIaow15HF3HXM5IIQiTwkrnNZSGcWU7xDfbJIioEvwcZEQH7vD3DAPNTgW2FJyMAr6hvHVcI3I6WZiTze-Oxui-7CzmWQk",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDbwGVIaMSHyLvwszWxgsrzIyuiUCr8ls4-XQ3ghjWdSs1L9WAUip0YCmytun6SHJI_wx9rxGdsAGrIKwdwSjQhtTEE8wLXwDqg9CvERs0hHuURyYCgNsR7tYTjeOnhxBKe_YDHGxioRtGSoooaPkyBL4KubwrTD1qs-Da7F-PEObt94U2GL4SdWKmLOhDXMqXfl0Vz1RdvLe4mg2hDy9gt8xzl7uexd6TGRVffDCPV-oLdeMdYqWihSsa41LG4je8EH8-QDesVEGE",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDhC8F4yYlDpfgo5Ar6cqRmVcA8TW_GvXKbWvsykOCa6hwEGtgHEKXmxQSk9drBTv-UzGjIMVJW429z5mlGjC5VZrLhWg4Yr1na1Icp6J80jD1PZsfXpi0YRU1HagTDFAptJqf8mbyI5eG9ZXOBfognR9dT9KaeNXqXkxighZ6E7lggHW6qkq9lmZxc0fMUhu3qzZGmbghuoKJek56qisLv4Y_10FT21UEq2bJHNqxF114Oa78vKq5FRBYCq0M5xv2rxhRNHG2-9DE",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB3nmEcgssd4-GnJUYrNGmDeQbih521GrIjoFApYspQdUKASGuFisD-dDPLJJA2CcR4ffvYqZ19nVEu3let6JshqjIbzZi8i39o25-js4AGntq7QlRL7KwycIRoAb0r2Mc-M1-K9P0BorUU61Yk9SHOyuhfhyhc4e0vlvEQkdxDufg2dt7RVfnWix2IFk40nYSrg7q0n2lI8IgSni-GXSxhRPNrE7AORFhZl0OV7N5zWNSHxl-RlB00uK1dke7b92tnUCVD2L4JdsQ",
];

const venueImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBAiiBORZYiKswM5vBbtwGebxpn4Gkk4f0I5KV7fck6ZrTcpxKrQK3tRC3aw3heE7JJShkygTiwivYdL4CxCi91y2w4XNPy1OoUMOqmRd3hf4j9pohAL1E__msNXuRIcMtU27CXhER8RfgnM7uPRDwpaIuL9AO4QzlYE9FgZMeKGEVeXSF3F4nVZ-QnhogKuztB7llREET7hWHXLsu8qqdocRYRWjpK4dJaQ09Hcs7CvfcqVRzoXi4lZax1AoBHaCKdduYd0myANdM",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD37rGNNp338vDMzEbuvgCWnLEUhP0ZEtJwQZbTLctc1-AczifLrvRwUdh805IqL_j6ierz7pmSQnAGhLhPmFcfBHBSV-9hdD7JUwIPy9AAAxhCFbmSE9r1WmIaWGOskkcAJYj1SW-RUvIB7zybjaBNxjeXUjso1U8LvAoC0JEiirKLzIpLbJRjvm_yG-sfLGLbuaz4hwkchkHnjLdcFNIntCNSSavRakwwr-TkqFCrt85J0wR86q7AzC7sPf_qDv_PHCzCIcpRXyk",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCAGrhagwYfheWu_b50B2z11r_2WD-93-AHvaVq-DbR58d6Oz8emQGyiQpN_TtJKwgCTbeowUtZg4ELAhy8rO1bzTFYJRcZks9nc-HEbnDE9Ix6-ibjwlKuYGgyTT17lrQVmmqDcV6BqHuN0YZxZKaU-rI2xxVTzoiK9KCydtrfokMntiJDPaGPZ0aVMv_YjILkJMtyBi3LfFZfZf5dX1CR_IqqU93Yok1bIGp5bhIPNBJh3k2vFZf5HEwnsB2rkTbB4U-Vfgnu0Uc",
];

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
                <img src={breweryImages[0]} alt={breweries[0].name} className="absolute inset-0 w-full h-full object-cover" />
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
                <img src={breweryImages[1]} alt={breweries[1].name} className="absolute inset-0 w-full h-full object-cover" />
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
                <img src={breweryImages[2 + index]} alt={brewery.name} className="absolute inset-0 w-full h-full object-cover" />
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
                    <img src={beerImages[index % beerImages.length]} alt={beer.name} className="w-full h-full object-cover" />
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
                  <img src={venueImages[index % venueImages.length]} alt={venue.name} className="w-full h-full object-cover" />
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
