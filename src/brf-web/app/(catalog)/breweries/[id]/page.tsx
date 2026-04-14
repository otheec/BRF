import Link from "next/link";
import { notFound } from "next/navigation";
import { getBrewery, listBeersByBrewery } from "@/lib/api";
import Badge from "@/components/Badge";

const BREWERY_HERO_IMAGES: Record<string, string> = {
  "a1b2c3d4-1111-4000-8000-000000000001":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBpYzT7k3SLdciwFQTJfYRKsyeRqTm5rwV1KSl6XhKK3bqwQXEghzPykxDUqlHIgNBksqhRfxsXSatdv02XC85G9vVveHsohIYjXrBzBovPbF1tNn2ZFQXYVuKB3FxgZV_LpDxAz_L6Uc6JtxuLrFeZulrARCN2I4DXhxFb2KhMY40kLxsSd4O57yAyZdwCCrHrw8otnOHbJN1TRFtxxkzGGTqAXMj9AqCQAHIJXOUdf3P2B-bCOMcdttCDqMjROaW1IfIMq74HhL8",
  "a1b2c3d4-1111-4000-8000-000000000002":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC88OJvb4OLwhxXc4u29g5plNCRw03GKqkSLCQTkOR9cqxC7JpJr3jGvape9K-6nzsa6IgnbJE6gpKCoabkJhsgfaD6Rk7ycooJcBRMqbwtXKab8Ely3_QZgijP1yQ3isDYEYAsk25obbpRtgIM0KFF-FCyXfdSQDKf91ajh6_QCfjphEejX-FWqKSRAXAreL-9OwclwSonP2OLWwbhq33BsnPtKVfwwublNnMZPmib-e91ugLOEijCUwvZvuiwCxcePPF2fYhVu0Q",
  "a1b2c3d4-1111-4000-8000-000000000003":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBdKEb839yRyR9CCZvbOhuPV_bDn_NE6DNQiocUmbEWkxG87mTq-r4uOY_dpU-8BjubT2vl9CDiwKnrawy1zQjcX1l44sDR57ALkJo5RP28JdX8ByBVwcCD3RLzaULkZoWK5g1GVwc9hDa0cxiGbP6uWp8CnKHWVaCId4IwynaO2J-Xq_xaoTqBBVWXx_MbpoxlZAa_p9n1IyKcJ37y7QhTc5ptyf1FhF9q7Vzw4hV4udaaHbZ-LX5AP1ZYpN3Aea7VL5aoMRXUwWY",
  "a1b2c3d4-1111-4000-8000-000000000004":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDawLTyqAQ-yRIrGLRHc-d8QT-b1xpcpAz1wrmBZoAJVAikNCG_bCXEztWxF85_1ONc6KALqk5-lP1b49tjlX-3QYQnczhV1JwGr05B5FW7aNmLEhockXilOSPp-nchahEOOJZtQqk8mK-YyyXeplMVvWjsGlmLTUVavYFUIUGVPTHdJXtW3uhVnT8AhD8fcayv3wobRG3DLLV65nwWvUJzCkUDcUNpRV_Fchksef1QQvKZsQnoqhg2ltY-KF2cfw_jAF-2jeA45_A",
  "a1b2c3d4-1111-4000-8000-000000000005":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDS6XarVM3C1d536IXKyIe_hU_C90GHAd1VT8ghBL7RGhLU82Y-xeByQ2z6Nb41qeetYDA0cFr7fm3tEzyQf7FSsaipIYhggbvejQ4GkhGYZ5jI_eyUjYfzK4FVHYyD5Hf3gr6YSL6GrrEXBj-o3WMm5Nj8AWUONjQHqgIjwvB55tgtOPIaow15HF3HXM5IIQiTwkrnNZSGcWU7xDfbJIioEvwcZEQH7vD3DAPNTgW2FJyMAr6hvHVcI3I6WZiTze-Oxui-7CzmWQk",
  "a1b2c3d4-1111-4000-8000-000000000006":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDbwGVIaMSHyLvwszWxgsrzIyuiUCr8ls4-XQ3ghjWdSs1L9WAUip0YCmytun6SHJI_wx9rxGdsAGrIKwdwSjQhtTEE8wLXwDqg9CvERs0hHuURyYCgNsR7tYTjeOnhxBKe_YDHGxioRtGSoooaPkyBL4KubwrTD1qs-Da7F-PEObt94U2GL4SdWKmLOhDXMqXfl0Vz1RdvLe4mg2hDy9gt8xzl7uexd6TGRVffDCPV-oLdeMdYqWihSsa41LG4je8EH8-QDesVEGE",
};

const DEFAULT_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDvE3RPWI5RqrmleF-D-9OHbOXYQ0sdzVq3NxSuvs4pQbaQwvh10Y8FSJyC0AGhK7PNI27wdDgegaP8Xv5CpkvkdebCQS5CrIkDAlHFlFuH7WIhXYdRdesFn9BrGu6bsMe3ERzpvFeqb8tU9cJ3Ygq_-Trn1ET6bKtQqcCVad_3-C1c6cQdayQKWY_T_OLpXYJeDuGSAJF65xEWj11aqlSgPfPEdu88ghYZ3_pxH2UbuvJtIYl1k8O4p00EqBt56a1VIdO9PZBeM5Y";

const BEER_IMAGES: Record<string, string> = {
  "c3d4e5f6-3333-4000-8000-000000000003":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBNqmY42My6UBKkBtKYI2_hXGnKXWNLPT2CBHqAG3XuW8SmioRD6yTI2aPkCP-VPzuPtuBkB3ezOXYg1frhXY8YgwePpMo9hmpdiS7MUq9sDTW9Vz6khbpvEQ6f1fqm2TLDPLq2kFzlEz22CWShnKDCusxULA85I-kIJEb1w8TtA8g6qLS5HgHpvUedgrH2p9mpSR0tw-LiWZxuVPvwrPOIaurfHKsRCerRt-e-Gncxf_LeuiGgWl-v1mKaSJfzpV-0IxMHtbz4mj8",
  "c3d4e5f6-3333-4000-8000-000000000004":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAWFvWaROYCwhfT0Dlp3OZyQuKfLHqq5RdNRkiNKHUw4pUDN9BR6XWh0EWA9im1cRpmDE0Qlb5gQe0NllTPQqBceN_glb0RJspFmX9Py3v4eLWymlc22tj_jmMpYetVtM_bttjpYLuP3Eci-gd-IJ6xXfqFfjajr7Z_NzXlSkc7h7hu6iK2K8avze_5wCjrneicSSB91C_PYihIxhKBS7AcY_xCinQQqCW4H-5mDC_jrMCchOrXjWBkt2V5GHiqZnufNn3HiOtdYjI",
  "c3d4e5f6-3333-4000-8000-000000000005":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB26DD15X5fE1sHI6R7VUD2V4kRBUO0b2PfZiQfB-NmRWk33YWyCmATtvz0YAsatPiWmRFUjvMZGP05MvHoPJsylQkdcyKY7FaJhhBUKorRFoL286i6DDYyZCjkcnowh03NxZPjw4uAC57H_7Gzm9vlZZTXSUmX2rSV9JPukS3YQv3HMIpoLrJNU1xLIbYbYyZ6SpQVHFb8dmL_43am4MIakTlV8xSrSkPZenYzHiSsBHQYCqq-2sOL1UruxyjIeIW8B5SSGQSybvA",
  "c3d4e5f6-3333-4000-8000-000000000006":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDw2Zk-c2QWStCZCOi72AcJkbBxD3YyQOK7SYi2sxhRDo3ikEIq4IJnhILPwIQCfRUwVJ-N59KGeXgWN7NiQ-WlpB-lkHCicLCYDiA6LLBSJLNWTASAOiY4s8yD802mEFgA9NJDt6Ptz-Td17TxjCl_qpACbOXihf6kUP_CaLarDYBS9CeeU31eQrDacaMDURAQJpICSP24C0ME92QUR90lGzWKHMN8JB63zkm3jrVXfLtPazxIyMPKI07s-TO_FsB5xEjfzCqNS24",
  "c3d4e5f6-3333-4000-8000-000000000007":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDAA6DPR_ZVbBiJkYTA2WZ2NUgv_NiHUvCogzjw1Ms4qhIuhNQyfPxai_YdxmGSyrz68GuOnbhiUvYEigfF94j5HfPonCl2o-SjUxPi3w4HYeKeGEElNoK3nqy-kwKfJygLMWxo0m0TJQsdzoBiRcLoIJ5a-7zEvJ7H4DyunrWiTR9MvPutX-fyR-bo9B4MG-ufY7ZJojiRFYTXhbXmtZ4_25CylFnZWmUv-Ka3MNU1taHNhJriY3nZtM7hHlaPr5Aywz_890D-Jgg",
};

const DEFAULT_BEER_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCpEuUEitOUeX5pH_pOdwceHDy4m3H2DZ1NmJ9D0o6G9vjy-fQYUYZgIAiJqlkMvnS-l23hKO0WhvhvX71LX2Y6II294XtOuBR5JREeE9-5k2_ooAOw9j64osHC-tgizgjWXvK_zP5h8Ta7kdzlDAJDbNQ9BjiIfLfGFc0PuYp2b8I-WU8tfuOw8MMcH2nZUUuqu2hDkIWpGoZbJ3P_hH76X96mN8QHpbzTi_K4GeQY03uVpFQHHn-gEoufO7zb4eXxnC6LDRzwNe4";

export default async function BreweryDetailPage(
  props: PageProps<"/breweries/[id]">
) {
  const { id } = await props.params;
  const brewery = await getBrewery(id);

  if (!brewery) {
    notFound();
  }

  const { items: breweryBeers } = await listBeersByBrewery(brewery.id);
  const heroImage = BREWERY_HERO_IMAGES[brewery.id] ?? DEFAULT_HERO_IMAGE;
  const initial = brewery.name[0]?.toUpperCase() ?? "B";
  const yearsActive = new Date().getFullYear() - brewery.established;

  return (
    <div className="bg-white text-stone-900 min-h-screen flex flex-col">
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative h-80 w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover"
            alt={brewery.name}
            src={heroImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full px-6 pb-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-6">
              {/* Logo badge */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-white p-2 shadow-xl border-4 border-white mb-2 md:mb-0 flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-black text-stone-800">
                  {initial}
                </span>
              </div>
              <div className="flex-grow text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="material-symbols-outlined text-orange-400 text-base"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <span className="text-xs uppercase tracking-widest font-bold text-orange-400">
                    {brewery.type}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">
                  {brewery.name}
                </h1>
                <div className="flex items-center gap-4 text-stone-200 font-medium">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span>{brewery.city}, {brewery.country}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">calendar_month</span>
                    <span>Zal. {brewery.established}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mb-2">
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-full transition-all shadow-lg active:scale-95 flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-base"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    add
                  </span>
                  Sledovat
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold p-3 rounded-full transition-all border border-white/30">
                  <span className="material-symbols-outlined">share</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid: Story & Stats */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* About / Story */}
            <div className="lg:col-span-8 bg-white border border-stone-100 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-black tracking-tight mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-orange-600 rounded-full" />
                O pivovaru
              </h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                {brewery.description ?? "Žádný popis k dispozici."}
              </p>
            </div>

            {/* Stats sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                <span className="text-orange-600 text-5xl font-black mb-1">
                  {breweryBeers.length}
                </span>
                <span className="text-orange-800 font-bold uppercase tracking-widest text-xs">
                  Piv v katalogu
                </span>
              </div>
              <div className="bg-stone-50 border border-stone-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                <span className="text-stone-900 text-5xl font-black mb-1">
                  {yearsActive}
                </span>
                <span className="text-stone-500 font-bold uppercase tracking-widest text-xs">
                  Let na scéně
                </span>
              </div>
              <div className="bg-stone-900 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-orange-500">bolt</span>
                  Rychlé info
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between border-b border-stone-800 pb-2">
                    <span className="text-stone-400">Typ pivovaru</span>
                    <span className="font-medium text-stone-100">{brewery.type}</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-800 pb-2">
                    <span className="text-stone-400">Založen</span>
                    <span className="font-medium text-stone-100">{brewery.established}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-stone-400">Lokace</span>
                    <span className="font-medium text-stone-100">{brewery.city}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Beer List Section */}
        {breweryBeers.length > 0 && (
          <section className="bg-stone-50 py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex justify-between items-end mb-10">
                <div>
                  <h2 className="text-3xl font-black tracking-tight mb-2">
                    Piva z {brewery.name}
                  </h2>
                  <p className="text-stone-500">
                    {breweryBeers.length} {breweryBeers.length === 1 ? "pivo" : breweryBeers.length < 5 ? "piva" : "piv"} v katalogu
                  </p>
                </div>
                <Link
                  href="/beers"
                  className="text-orange-600 font-bold flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Všechna piva
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {breweryBeers.map((beer) => {
                  const beerImage = BEER_IMAGES[beer.id] ?? DEFAULT_BEER_IMAGE;
                  return (
                    <Link
                      key={beer.id}
                      href={`/beers/${beer.id}`}
                      className="bg-white rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-all border border-transparent hover:border-orange-200"
                    >
                      <div className="relative h-48 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          alt={beer.name}
                          src={beerImage}
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-black text-xl group-hover:text-orange-600 transition-colors">
                              {beer.name}
                            </h3>
                            <p className="text-sm text-stone-500 italic">{beer.style}</p>
                          </div>
                          {beer.abv != null && (
                            <span className="bg-stone-100 px-2 py-1 rounded text-xs font-bold">
                              {beer.abv}% ABV
                            </span>
                          )}
                        </div>
                        {beer.description && (
                          <p className="text-sm text-stone-600 line-clamp-2 mb-4">
                            {beer.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
