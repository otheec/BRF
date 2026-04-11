import Link from "next/link";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

export default function BreweriesPage() {
  return (
    <div className="bg-stone-50 text-stone-900 antialiased min-h-screen flex flex-col">
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-black tracking-tight text-stone-900 mb-2">All Breweries</h1>
            <p className="text-stone-500">Explore the world&apos;s finest craft beer producers</p>
          </div>
          {/* Filters */}
          <div className="bg-white rounded-xl p-4 mb-8 shadow-sm border border-stone-100">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-400 px-1">Region</label>
                  <select className="w-full bg-stone-50 border-stone-200 rounded-lg text-sm focus:ring-orange-500 focus:border-orange-500" defaultValue="All Regions">
                    <option>All Regions</option>
                    <option>Pacific NW</option>
                    <option>Midwest</option>
                    <option>Northeast</option>
                    <option>Mountain West</option>
                    <option>Europe</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-400 px-1">Style Focus</label>
                  <select className="w-full bg-stone-50 border-stone-200 rounded-lg text-sm focus:ring-orange-500 focus:border-orange-500" defaultValue="All Styles">
                    <option>All Styles</option>
                    <option>IPA Specialists</option>
                    <option>Stout-focused</option>
                    <option>Sour Specialists</option>
                    <option>Traditional Lagers</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-400 px-1">Min. Rating</label>
                  <select className="w-full bg-stone-50 border-stone-200 rounded-lg text-sm focus:ring-orange-500 focus:border-orange-500" defaultValue="Any Rating">
                    <option>Any Rating</option>
                    <option>4.5+ ★</option>
                    <option>4.0+ ★</option>
                    <option>3.5+ ★</option>
                  </select>
                </div>
                <div className="hidden lg:flex items-end">
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-lg">filter_alt</span>
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-stone-100">
              <span className="inline-flex items-center gap-1 bg-orange-50 text-orange-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-orange-100">
                Pacific NW
                <button className="material-symbols-outlined text-xs">close</button>
              </span>
              <span className="inline-flex items-center gap-1 bg-orange-50 text-orange-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-orange-100">
                IPA Specialists
                <button className="material-symbols-outlined text-xs">close</button>
              </span>
              <button className="text-stone-400 hover:text-orange-600 text-xs font-medium px-2 py-1">Clear all</button>
            </div>
          </div>

          {/* Brewery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Link href="/breweries/north-fork" className="bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <div className="h-32 bg-stone-200 relative overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0qLCjEkY-Vbzp8vm6PjjpidJxa_SROE-qWuEGS-Ckn8uM3EUz-VIRtwUV6zIBWqobV1LkUj-BfOWGJWLk3zli-hi_y1iKNM1xFrTRD0A3mnlkm6H1HvtFBeBE8teeXM_NMX5szxePwpL3t2Efd_GtS_WR2tUCqqrzIN4y6ylKvnn7LEq7DEeiKeyPiyZyUPDA7fXa6FXU2x65PpfRh8g07r0RnFIcP6nDapVTHsbMwmijS4Ma-zs18GA5Gz7zhnglsi6k7LbLLiI" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <div className="w-10 h-10 bg-white rounded-lg p-1 shadow-sm border border-stone-100">
                    <img className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqBw8IJQFHmdAJ0jkM_WDVkF3TIimMBYmpH6fFGGXzrJ2Mtk8Hhqq082-THnx4-DpoOOK5SD8rg2hCyHza6Alo38dAFkYSZtTbtLcWQ5MfrUOJrncCSUDwk6lKN6qu0BwsAd5lyo8u3Nq-qOWdnQ_p3DOS1e-9fN2c2HBUGVFh_u55npkpL2PvL-J6HwGvwWXYpm8fVtVAP9U8MMI4QDGLH8JKOYaDPs0nmj1YVwJHCbh6EKRa8PHEkch6LHJoj-a82YoIu7B-LQQ" alt="" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-stone-900 group-hover:text-orange-700 transition-colors">North Fork Brewing</h3>
                    <p className="text-xs text-stone-500 flex items-center gap-1"><span className="material-symbols-outlined text-xs">location_on</span>Bellingham, WA</p>
                  </div>
                  <div className="flex items-center gap-0.5 text-orange-500">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold">4.8</span>
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="bg-stone-100 text-stone-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">IPA Specialist</span>
                  <span className="bg-stone-100 text-stone-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Organic</span>
                </div>
                <button className="w-full py-2 bg-stone-50 hover:bg-orange-600 hover:text-white text-stone-900 font-bold text-xs rounded-lg border border-stone-200 hover:border-orange-600 transition-all active:scale-95">Follow Brewery</button>
              </div>
            </Link>

            <Link href="/breweries/iron-range" className="bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <div className="h-32 bg-stone-200 relative overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCujPcP1nImx6y8WXNqyFOix6UvgWYhGsonhr_54Qx4VxXhsKilAVx9aOBTBmGhGsiirl7Ca5h85dPxUiMKn4XkQNipKdaq0pCCX8BZeaPmN7EJ0g2gN5HuyqPXkkaMSzSv0WlXfBTBEftM_-dXig3kLUvXdKt11na8V6TWLw1nu7QdQEdelQ6STlWBhN3OhpIx3P_t5-YSZbFwpyzTfAcepV4eIj_TBaKxx333h0zekXeUgbzsNxNtKfFOPvdmdN5YmUfUz3az0oc" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <div className="w-10 h-10 bg-white rounded-lg p-1 shadow-sm border border-stone-100">
                    <img className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRvzWqoLFkxtguAPFQ-U0gGtB7IndRMKNU27Mcbwwb8Fv3-Uo4gMywxdHpxGu2h4nOS_SmTXYYLSnnQMkJh0T8Ar7cfkLPJVc9ftB5Hfh5jwLn5w-SS0FltzNt8spKIJ4bmOwNP-8mLA1tAuRfmpt4VAkB1XiAxN7veSIs26NG9QAO8xwUWKlPclTXmZ2BEF5T9eyAZjv_9cF-T4W7BPw-wz5BSHmHQx-Xk6NvWKdj8rOnKD5BPmL3_F-PX0PaBj5AAjBIJI4WXig" alt="" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-stone-900 group-hover:text-orange-700 transition-colors">Iron Range Ales</h3>
                    <p className="text-xs text-stone-500 flex items-center gap-1"><span className="material-symbols-outlined text-xs">location_on</span>Duluth, MN</p>
                  </div>
                  <div className="flex items-center gap-0.5 text-orange-500">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold">4.6</span>
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="bg-stone-100 text-stone-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Stout Focus</span>
                  <span className="bg-stone-100 text-stone-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Barrel Aged</span>
                </div>
                <button className="w-full py-2 bg-stone-50 hover:bg-orange-600 hover:text-white text-stone-900 font-bold text-xs rounded-lg border border-stone-200 hover:border-orange-600 transition-all active:scale-95">Follow Brewery</button>
              </div>
            </Link>

            <Link href="/breweries/coastal-mist" className="bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <div className="h-32 bg-stone-200 relative overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9nOgix8j9OV-p5dwcqlfbF9Csj229L-MbJMTNmxh1Bxfbq1KZs7OrCM318L_qz1iQZD_sQC4iHBSX4rWCYWHktpcKs0u5UJ5L8p4a0cq-l1GdEtypcTXOfnH_YOOEtecveRJ8P4iNHD3Cnp8KH7sb17kMpUCkGqnV6yhboyk_mS5WeCwNbft3-WN_v8MyXb215osT-8ufWiLNR3KC3EMUXAz14aePWwj7XTCXWlvWy5ZaJnqvKcNtmqW77rUzUGC6s6r6uVtm18o" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <div className="w-10 h-10 bg-white rounded-lg p-1 shadow-sm border border-stone-100">
                    <img className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbdYMC0hEkQkLFP0p63Yk4X9dHgoyzqS_ZGKJRqnfJzEmUY14R18gV6X02pzcTcbRKKfnEZ7yLIgMaL0xl9ElXC7KfCjU6qIx_PxqbIrN9-Cb33QUrlRYwj3CUvkNbPobtSp5LGkngkoZrNqykGtIhteBwLY8kdJplBDEsTNVEc5PQlvOQtZvIiuiaxeEOx8agTN_pewB0gllyjhd6ws7zD48mWD-4nYyD--Vz2ZkLCLncEbmkA10jKodWLQ8_0hUjF7MS9ak2anQ" alt="" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-stone-900 group-hover:text-orange-700 transition-colors">Coastal Mist Brewing</h3>
                    <p className="text-xs text-stone-500 flex items-center gap-1"><span className="material-symbols-outlined text-xs">location_on</span>Astoria, OR</p>
                  </div>
                  <div className="flex items-center gap-0.5 text-orange-500">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold">4.9</span>
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="bg-stone-100 text-stone-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Sours</span>
                  <span className="bg-stone-100 text-stone-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Wild Ferment</span>
                </div>
                <button className="w-full py-2 bg-stone-50 hover:bg-orange-600 hover:text-white text-stone-900 font-bold text-xs rounded-lg border border-stone-200 hover:border-orange-600 transition-all active:scale-95">Follow Brewery</button>
              </div>
            </Link>

            <Link href="/breweries/wildwood" className="bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <div className="h-32 bg-stone-200 relative overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr4baj8-rD_mdir5USpIjr5zF8Eu6M2k3rPIiYp3-Pwq8jNgmT_3PaeimozV1RONGuD-KhOUAj_77IRwi2ZmjpNt19sur3LWjfr1HCF8UE3X1TQab0GychiPLTpISQMGoRINg8kd2z-PvFvxkKvmJ081BoSzqR85kexXj6uXME5AwvC2vNsv6UqNfC8MGS6GSIiDg-lBZizmH5gbmNU8Msicb2hFNHS-JzAyHO-3WCmhmdNhaN42WdLJOkFk2u5k88qOA3FjPybrM" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <div className="w-10 h-10 bg-white rounded-lg p-1 shadow-sm border border-stone-100">
                    <img className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD5DHz2-N1aD4OCNkteg0kOdj91C9Ulgg9rXNn9Vr9aulX0Qbhb08ealu4Yt0Tz30xTrbNW7PDANRDErtHslg1qy6AVKDlLbHJ7wxQEcTEXFAr6H-C7SaUIQ4KslPFEZAQJawSFxMeObqDtY2K2n7e8cgfuAfOHFno_N_XUYAz7RJtfvoS24ta2M-JN6czw0pDvY3qbZSowzmw_MuueiEIAtHYtDJGBGybxPS751sG4lrkp-aylOK8NhVch5rOdDq_Ze9jZE-liQE" alt="" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-stone-900 group-hover:text-orange-700 transition-colors">Wildwood Brewing Co.</h3>
                    <p className="text-xs text-stone-500 flex items-center gap-1"><span className="material-symbols-outlined text-xs">location_on</span>Asheville, NC</p>
                  </div>
                  <div className="flex items-center gap-0.5 text-orange-500">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold">4.8</span>
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="bg-stone-100 text-stone-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Wild Ferment</span>
                  <span className="bg-stone-100 text-stone-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Forest</span>
                </div>
                <button className="w-full py-2 bg-orange-600 text-white font-bold text-xs rounded-lg border border-orange-600 shadow-sm flex items-center justify-center gap-2 transition-all active:scale-95">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Following
                </button>
              </div>
            </Link>

            <div className="bg-stone-100/50 rounded-xl border border-dashed border-stone-200 h-[320px] flex flex-col items-center justify-center p-8 text-center">
              <span className="material-symbols-outlined text-stone-300 text-4xl mb-2">add_location_alt</span>
              <p className="text-stone-400 text-sm font-medium">New Brewery opening soon in your area</p>
            </div>

            <Link href="/breweries/sun-drenched" className="bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <div className="h-32 bg-stone-200 relative overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaXY8vvjlG8w70IL0ojXs1xQeOuI9HFTr2GC9E3927cEMKATMordEIPjFtwP7qQDceqqdPc56h-1eNsjTeQkcLq-nZic7amed5nB7pPgwL1tHbfF-uy_aolrTlzWaIOs1mnrjFGAlQ9vv8ydSdSjJY5W6-CkgzB7uK-5euBo5WueIjtop8vBbNa0Wa9pB_Ke6_mwaQiCrsrdiUuH1t7uCdW19SFcsqCvlDRd8beVPsjDsJREjYKbjpQAEYouRBfWp4s0cVaZEBbP8" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <div className="w-10 h-10 bg-white rounded-lg p-1 shadow-sm border border-stone-100">
                    <img className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj2fdf6FvqY-6bvlzZEX-mSpDCbMcOOa1wHMh0GLx7hv_wePDssPy4lcOChvjOIy6UHjZaFhzKl1PkqsfJr97hMlYEumJ5wSuk9RRW4wQh9akbYw-N9f7j9inLSRjotlZ3D9CSnRA7Y8DtI7y-KP0ibqs0BVkDUtsPBCwoaYnWcGxO1oR6cegqmIHA3JG1t2XOrH8UnlXHKdTOXN5yHF1eDeQwOb2I9YGIR71OwxfHgP8SeJ-NH-ddAWTA1nfKNpvX17N1ZzSaPwY" alt="" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-stone-900 group-hover:text-orange-700 transition-colors">Sun-Drenched Brews</h3>
                    <p className="text-xs text-stone-500 flex items-center gap-1"><span className="material-symbols-outlined text-xs">location_on</span>San Diego, CA</p>
                  </div>
                  <div className="flex items-center gap-0.5 text-orange-500">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold">4.7</span>
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="bg-stone-100 text-stone-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">West Coast</span>
                  <span className="bg-stone-100 text-stone-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Citrus IPA</span>
                </div>
                <button className="w-full py-2 bg-stone-50 hover:bg-orange-600 hover:text-white text-stone-900 font-bold text-xs rounded-lg border border-stone-200 hover:border-orange-600 transition-all active:scale-95">Follow Brewery</button>
              </div>
            </Link>
          </div>

          {/* Pagination */}
          <div className="mt-12 mb-12 flex flex-col items-center gap-6">
            <button className="px-8 py-3 bg-white border border-stone-200 rounded-full text-stone-900 font-bold hover:bg-stone-50 hover:border-orange-500 transition-all active:scale-95 shadow-sm">
              Load More Breweries
            </button>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-stone-200 text-stone-400 hover:text-orange-600 hover:border-orange-600 transition-colors">
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-orange-600 text-white font-bold text-xs">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-stone-200 text-stone-600 hover:text-orange-600 hover:border-orange-600 transition-colors text-xs font-medium">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-stone-200 text-stone-600 hover:text-orange-600 hover:border-orange-600 transition-colors text-xs font-medium">3</button>
              <span className="text-stone-400 px-1">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-stone-200 text-stone-600 hover:text-orange-600 hover:border-orange-600 transition-colors text-xs font-medium">12</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-stone-200 text-stone-400 hover:text-orange-600 hover:border-orange-600 transition-colors">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
