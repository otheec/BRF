import Link from "next/link";

export default function CatalogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Search Section */}
        <section className="relative py-16 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-stone-900 mb-6">
              Discover Your Next <span className="text-orange-600">Favorite Pour</span>.
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-10">
              Browse through thousands of artisan breweries, rare ales, and local taprooms curated by our community of craft enthusiasts.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm font-semibold shadow-sm hover:border-orange-200 transition-colors cursor-pointer">IPA</span>
              <span className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm font-semibold shadow-sm hover:border-orange-200 transition-colors cursor-pointer">Stouts</span>
              <span className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm font-semibold shadow-sm hover:border-orange-200 transition-colors cursor-pointer">Sours</span>
              <span className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm font-semibold shadow-sm hover:border-orange-200 transition-colors cursor-pointer">Local Taprooms</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent -z-10"></div>
        </section>

        {/* Featured Breweries */}
        <section className="py-12 px-6 max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-stone-900">Featured Breweries</h2>
              <p className="text-stone-500">The masters of craft currently trending in the community.</p>
            </div>
            <Link className="text-orange-600 font-bold flex items-center gap-1 hover:gap-2 transition-all" href="/breweries">
              View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Large Feature */}
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-xl bg-stone-100 aspect-square md:aspect-auto">
              <img
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpYzT7k3SLdciwFQTJfYRKsyeRqTm5rwV1KSl6XhKK3bqwQXEghzPykxDUqlHIgNBksqhRfxsXSatdv02XC85G9vVveHsohIYjXrBzBovPbF1tNn2ZFQXYVuKB3FxgZV_LpDxAz_L6Uc6JtxuLrFeZulrARCN2I4DXhxFb2KhMY40kLxsSd4O57yAyZdwCCrHrw8otnOHbJN1TRFtxxkzGGTqAXMj9AqCQAHIJXOUdf3P2B-bCOMcdttCDqMjROaW1IfIMq74HhL8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="inline-block px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full w-fit mb-3">Brewery of the Month</span>
                <h3 className="text-3xl font-bold text-white mb-2">Northbound Craft</h3>
                <p className="text-stone-200 text-sm mb-4">Vancouver, Canada • Pioneers of Pacific Northwest organic ales.</p>
                <button className="bg-white text-stone-900 px-6 py-2 rounded-full font-bold text-sm w-fit hover:bg-orange-50 transition-colors">Explore Collection</button>
              </div>
            </div>
            {/* Secondary Feature */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-xl bg-stone-200 h-64">
              <img
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC88OJvb4OLwhxXc4u29g5plNCRw03GKqkSLCQTkOR9cqxC7JpJr3jGvape9K-6nzsa6IgnbJE6gpKCoabkJhsgfaD6Rk7ycooJcBRMqbwtXKab8Ely3_QZgijP1yQ3isDYEYAsk25obbpRtgIM0KFF-FCyXfdSQDKf91ajh6_QCfjphEejX-FWqKSRAXAreL-9OwclwSonP2OLWwbhq33BsnPtKVfwwublNnMZPmib-e91ugLOEijCUwvZvuiwCxcePPF2fYhVu0Q"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">Midnight Hops</h3>
                <p className="text-stone-300 text-xs">Berlin, Germany • Experimental dark malts.</p>
              </div>
            </div>
            {/* Small Feature 1 */}
            <div className="group relative overflow-hidden rounded-xl bg-stone-100 h-64">
              <img
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdKEb839yRyR9CCZvbOhuPV_bDn_NE6DNQiocUmbEWkxG87mTq-r4uOY_dpU-8BjubT2vl9CDiwKnrawy1zQjcX1l44sDR57ALkJo5RP28JdX8ByBVwcCD3RLzaULkZoWK5g1GVwc9hDa0cxiGbP6uWp8CnKHWVaCId4IwynaO2J-Xq_xaoTqBBVWXx_MbpoxlZAa_p9n1IyKcJ37y7QhTc5ptyf1FhF9q7Vzw4hV4udaaHbZ-LX5AP1ZYpN3Aea7VL5aoMRXUwWY"
              />
              <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
                <h3 className="text-lg font-bold text-white">Rustic Barrel</h3>
                <p className="text-stone-300 text-xs">Austin, USA</p>
              </div>
            </div>
            {/* Small Feature 2 */}
            <div className="group relative overflow-hidden rounded-xl bg-stone-100 h-64">
              <img
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDawLTyqAQ-yRIrGLRHc-d8QT-b1xpcpAz1wrmBZoAJVAikNCG_bCXEztWxF85_1ONc6KALqk5-lP1b49tjlX-3QYQnczhV1JwGr05B5FW7aNmLEhockXilOSPp-nchahEOOJZtQqk8mK-YyyXeplMVvWjsGlmLTUVavYFUIUGVPTHdJXtW3uhVnT8AhD8fcayv3wobRG3DLLV65nwWvUJzCkUDcUNpRV_Fchksef1QQvKZsQnoqhg2ltY-KF2cfw_jAF-2jeA45_A"
              />
              <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
                <h3 className="text-lg font-bold text-white">Neon Logic</h3>
                <p className="text-stone-300 text-xs">Tokyo, Japan</p>
              </div>
            </div>
          </div>
        </section>

        {/* Top-Rated Beers */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-stone-900">Top-Rated Beers</h2>
                <p className="text-stone-500">Highest rated by the Brewfolio community this week.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Beer Card 1 */}
              <Link href="/beers/coastal-haze-ipa" className="flex flex-col group">
                <div className="aspect-[4/5] bg-stone-100 rounded-2xl mb-4 overflow-hidden relative">
                  <img
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS6XarVM3C1d536IXKyIe_hU_C90GHAd1VT8ghBL7RGhLU82Y-xeByQ2z6Nb41qeetYDA0cFr7fm3tEzyQf7FSsaipIYhggbvejQ4GkhGYZ5jI_eyUjYfzK4FVHYyD5Hf3gr6YSL6GrrEXBj-o3WMm5Nj8AWUONjQHqgIjwvB55tgtOPIaow15HF3HXM5IIQiTwkrnNZSGcWU7xDfbJIioEvwcZEQH7vD3DAPNTgW2FJyMAr6hvHVcI3I6WZiTze-Oxui-7CzmWQk"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-orange-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold">4.9</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg leading-tight group-hover:text-orange-600 transition-colors">Coastal Haze IPA</h3>
                <p className="text-stone-500 text-sm mb-2">New England IPA • 6.8% ABV</p>
                <div className="flex items-center gap-2 mt-auto">
                  <div className="w-6 h-6 rounded-full bg-stone-200 overflow-hidden">
                    <img alt="" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv5dtMUBUWpADphvnMP7zmvDDgI-usxwzdQnvaPkh558Eiid_lZnwMye8eKUq6xEsS2FAPfOAmogSPF_RekRni-YwRaT3D6YQkGcYmzp7MyftD9dtrAos2Rby0TZhmSqKh1Cdi-gi-LYtoDAedX9whLEknnVvitcNOZhlzEqnow50kBei4k0GHiGZhEKTWUL25KmCmsE1wUzT1vvf-rEJ5KYprTcmwzjtpFgUdt2nrkd9LA0-Dt23TYbhsQccRvRMPe54n4qO8hfo" />
                  </div>
                  <span className="text-xs font-medium text-stone-700">Shoreline Brewing</span>
                </div>
              </Link>
              {/* Beer Card 2 */}
              <Link href="/beers/obsidian-stout" className="flex flex-col group">
                <div className="aspect-[4/5] bg-stone-100 rounded-2xl mb-4 overflow-hidden relative">
                  <img
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbwGVIaMSHyLvwszWxgsrzIyuiUCr8ls4-XQ3ghjWdSs1L9WAUip0YCmytun6SHJI_wx9rxGdsAGrIKwdwSjQhtTEE8wLXwDqg9CvERs0hHuURyYCgNsR7tYTjeOnhxBKe_YDHGxioRtGSoooaPkyBL4KubwrTD1qs-Da7F-PEObt94U2GL4SdWKmLOhDXMqXfl0Vz1RdvLe4mg2hDy9gt8xzl7uexd6TGRVffDCPV-oLdeMdYqWihSsa41LG4je8EH8-QDesVEGE"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-orange-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold">4.8</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg leading-tight group-hover:text-orange-600 transition-colors">Obsidian Stout</h3>
                <p className="text-stone-500 text-sm mb-2">Imperial Stout • 10.2% ABV</p>
                <div className="flex items-center gap-2 mt-auto">
                  <div className="w-6 h-6 rounded-full bg-stone-200 overflow-hidden">
                    <div className="w-full h-full bg-stone-800 flex items-center justify-center text-[10px] text-white font-black">M</div>
                  </div>
                  <span className="text-xs font-medium text-stone-700">Mountain Forge</span>
                </div>
              </Link>
              {/* Beer Card 3 */}
              <Link href="/beers/alpine-lager" className="flex flex-col group">
                <div className="aspect-[4/5] bg-stone-100 rounded-2xl mb-4 overflow-hidden relative">
                  <img
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhC8F4yYlDpfgo5Ar6cqRmVcA8TW_GvXKbWvsykOCa6hwEGtgHEKXmxQSk9drBTv-UzGjIMVJW429z5mlGjC5VZrLhWg4Yr1na1Icp6J80jD1PZsfXpi0YRU1HagTDFAptJqf8mbyI5eG9ZXOBfognR9dT9KaeNXqXkxighZ6E7lggHW6qkq9lmZxc0fMUhu3qzZGmbghuoKJek56qisLv4Y_10FT21UEq2bJHNqxF114Oa78vKq5FRBYCq0M5xv2rxhRNHG2-9DE"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-orange-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold">4.7</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg leading-tight group-hover:text-orange-600 transition-colors">Alpine Lager</h3>
                <p className="text-stone-500 text-sm mb-2">Helles Lager • 4.5% ABV</p>
                <div className="flex items-center gap-2 mt-auto">
                  <div className="w-6 h-6 rounded-full bg-stone-200 overflow-hidden">
                    <div className="w-full h-full bg-blue-600 flex items-center justify-center text-[10px] text-white font-black">A</div>
                  </div>
                  <span className="text-xs font-medium text-stone-700">Apex Brew Co.</span>
                </div>
              </Link>
              {/* Beer Card 4 */}
              <Link href="/beers/velvet-sour" className="flex flex-col group">
                <div className="aspect-[4/5] bg-stone-100 rounded-2xl mb-4 overflow-hidden relative">
                  <img
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3nmEcgssd4-GnJUYrNGmDeQbih521GrIjoFApYspQdUKASGuFisD-dDPLJJA2CcR4ffvYqZ19nVEu3let6JshqjIbzZi8i39o25-js4AGntq7QlRL7KwycIRoAb0r2Mc-M1-K9P0BorUU61Yk9SHOyuhfhyhc4e0vlvEQkdxDufg2dt7RVfnWix2IFk40nYSrg7q0n2lI8IgSni-GXSxhRPNrE7AORFhZl0OV7N5zWNSHxl-RlB00uK1dke7b92tnUCVD2L4JdsQ"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-orange-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold">4.9</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg leading-tight group-hover:text-orange-600 transition-colors">Velvet Sour</h3>
                <p className="text-stone-500 text-sm mb-2">Raspberry Lambic • 5.4% ABV</p>
                <div className="flex items-center gap-2 mt-auto">
                  <div className="w-6 h-6 rounded-full bg-stone-200 overflow-hidden">
                    <div className="w-full h-full bg-red-500 flex items-center justify-center text-[10px] text-white font-black">F</div>
                  </div>
                  <span className="text-xs font-medium text-stone-700">Flora Wild Ales</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Venues */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-stone-900">Popular Venues</h2>
              <p className="text-stone-500">The best places to enjoy a fresh pour near you.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Venue Card 1 */}
            <div className="bg-white p-2 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-stone-200 rounded-xl mb-4 relative overflow-hidden">
                <img alt="" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAiiBORZYiKswM5vBbtwGebxpn4Gkk4f0I5KV7fck6ZrTcpxKrQK3tRC3aw3heE7JJShkygTiwivYdL4CxCi91y2w4XNPy1OoUMOqmRd3hf4j9pohAL1E__msNXuRIcMtU27CXhER8RfgnM7uPRDwpaIuL9AO4QzlYE9FgZMeKGEVeXSF3F4nVZ-QnhogKuztB7llREET7hWHXLsu8qqdocRYRWjpK4dJaQ09Hcs7CvfcqVRzoXi4lZax1AoBHaCKdduYd0myANdM" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-orange-600 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">Taproom</span>
                </div>
              </div>
              <div className="px-3 pb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg">The Copper Tap</h3>
                  <div className="flex items-center gap-1 text-orange-600">
                    <span className="material-symbols-outlined text-xs">location_on</span>
                    <span className="text-xs font-semibold">Portland</span>
                  </div>
                </div>
                <p className="text-stone-500 text-sm mb-4">42 Rotating Taps • Local Kitchen • Patio</p>
                <Link href="/venues/copper-tap" className="block w-full py-2 border border-stone-200 rounded-lg text-sm font-bold text-stone-700 hover:bg-stone-50 transition-colors text-center">View Menu</Link>
              </div>
            </div>
            {/* Venue Card 2 */}
            <div className="bg-white p-2 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-stone-200 rounded-xl mb-4 relative overflow-hidden">
                <img alt="" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD37rGNNp338vDMzEbuvgCWnLEUhP0ZEtJwQZbTLctc1-AczifLrvRwUdh805IqL_j6ierz7pmSQnAGhLhPmFcfBHBSV-9hdD7JUwIPy9AAAxhCFbmSE9r1WmIaWGOskkcAJYj1SW-RUvIB7zybjaBNxjeXUjso1U8LvAoC0JEiirKLzIpLbJRjvm_yG-sfLGLbuaz4hwkchkHnjLdcFNIntCNSSavRakwwr-TkqFCrt85J0wR86q7AzC7sPf_qDv_PHCzCIcpRXyk" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-stone-800 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">Bottle Shop</span>
                </div>
              </div>
              <div className="px-3 pb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg">Hops &amp; Cellar</h3>
                  <div className="flex items-center gap-1 text-orange-600">
                    <span className="material-symbols-outlined text-xs">location_on</span>
                    <span className="text-xs font-semibold">London</span>
                  </div>
                </div>
                <p className="text-stone-500 text-sm mb-4">500+ Rare Cans • International Shipments</p>
                <Link href="/venues/hops-cellar" className="block w-full py-2 border border-stone-200 rounded-lg text-sm font-bold text-stone-700 hover:bg-stone-50 transition-colors text-center">Shop Now</Link>
              </div>
            </div>
            {/* Venue Card 3 */}
            <div className="bg-white p-2 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-stone-200 rounded-xl mb-4 relative overflow-hidden">
                <img alt="" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAGrhagwYfheWu_b50B2z11r_2WD-93-AHvaVq-DbR58d6Oz8emQGyiQpN_TtJKwgCTbeowUtZg4ELAhy8rO1bzTFYJRcZks9nc-HEbnDE9Ix6-ibjwlKuYGgyTT17lrQVmmqDcV6BqHuN0YZxZKaU-rI2xxVTzoiK9KCydtrfokMntiJDPaGPZ0aVMv_YjILkJMtyBi3LfFZfZf5dX1CR_IqqU93Yok1bIGp5bhIPNBJh3k2vFZf5HEwnsB2rkTbB4U-Vfgnu0Uc" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-orange-600 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">Taproom</span>
                </div>
              </div>
              <div className="px-3 pb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg">Amber Lounge</h3>
                  <div className="flex items-center gap-1 text-orange-600">
                    <span className="material-symbols-outlined text-xs">location_on</span>
                    <span className="text-xs font-semibold">Melbourne</span>
                  </div>
                </div>
                <p className="text-stone-500 text-sm mb-4">Craft Cocktails &amp; Ale • Live Jazz • Rooftop</p>
                <Link href="/venues/amber-lounge" className="block w-full py-2 border border-stone-200 rounded-lg text-sm font-bold text-stone-700 hover:bg-stone-50 transition-colors text-center">Book Table</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 px-6 bg-stone-900 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <span className="material-symbols-outlined text-5xl text-orange-500 mb-6 block">sports_bar</span>
            <h2 className="text-3xl font-black mb-4">Stay in the Loop</h2>
            <p className="text-stone-400 mb-8">Get the latest beer releases, brewery openings, and exclusive craft news delivered to your inbox every Friday.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input className="flex-grow px-6 py-3 bg-stone-800 border-stone-700 rounded-full focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Enter your email" type="email" />
              <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 transition-colors rounded-full font-bold" type="submit">Subscribe</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
