import Link from "next/link";
import { listBreweries } from "@/lib/api";

const breweryImages: Record<string, string> = {
  "a1b2c3d4-1111-4000-8000-000000000001": "https://lh3.googleusercontent.com/aida-public/AB6AXuBpYzT7k3SLdciwFQTJfYRKsyeRqTm5rwV1KSl6XhKK3bqwQXEghzPykxDUqlHIgNBksqhRfxsXSatdv02XC85G9vVveHsohIYjXrBzBovPbF1tNn2ZFQXYVuKB3FxgZV_LpDxAz_L6Uc6JtxuLrFeZulrARCN2I4DXhxFb2KhMY40kLxsSd4O57yAyZdwCCrHrw8otnOHbJN1TRFtxxkzGGTqAXMj9AqCQAHIJXOUdf3P2B-bCOMcdttCDqMjROaW1IfIMq74HhL8",
  "a1b2c3d4-1111-4000-8000-000000000002": "https://lh3.googleusercontent.com/aida-public/AB6AXuC88OJvb4OLwhxXc4u29g5plNCRw03GKqkSLCQTkOR9cqxC7JpJr3jGvape9K-6nzsa6IgnbJE6gpKCoabkJhsgfaD6Rk7ycooJcBRMqbwtXKab8Ely3_QZgijP1yQ3isDYEYAsk25obbpRtgIM0KFF-FCyXfdSQDKf91ajh6_QCfjphEejX-FWqKSRAXAreL-9OwclwSonP2OLWwbhq33BsnPtKVfwwublNnMZPmib-e91ugLOEijCUwvZvuiwCxcePPF2fYhVu0Q",
  "a1b2c3d4-1111-4000-8000-000000000003": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdKEb839yRyR9CCZvbOhuPV_bDn_NE6DNQiocUmbEWkxG87mTq-r4uOY_dpU-8BjubT2vl9CDiwKnrawy1zQjcX1l44sDR57ALkJo5RP28JdX8ByBVwcCD3RLzaULkZoWK5g1GVwc9hDa0cxiGbP6uWp8CnKHWVaCId4IwynaO2J-Xq_xaoTqBBVWXx_MbpoxlZAa_p9n1IyKcJ37y7QhTc5ptyf1FhF9q7Vzw4hV4udaaHbZ-LX5AP1ZYpN3Aea7VL5aoMRXUwWY",
  "a1b2c3d4-1111-4000-8000-000000000004": "https://lh3.googleusercontent.com/aida-public/AB6AXuDawLTyqAQ-yRIrGLRHc-d8QT-b1xpcpAz1wrmBZoAJVAikNCG_bCXEztWxF85_1ONc6KALqk5-lP1b49tjlX-3QYQnczhV1JwGr05B5FW7aNmLEhockXilOSPp-nchahEOOJZtQqk8mK-YyyXeplMVvWjsGlmLTUVavYFUIUGVPTHdJXtW3uhVnT8AhD8fcayv3wobRG3DLLV65nwWvUJzCkUDcUNpRV_Fchksef1QQvKZsQnoqhg2ltY-KF2cfw_jAF-2jeA45_A",
  "a1b2c3d4-1111-4000-8000-000000000005": "https://lh3.googleusercontent.com/aida-public/AB6AXuDS6XarVM3C1d536IXKyIe_hU_C90GHAd1VT8ghBL7RGhLU82Y-xeByQ2z6Nb41qeetYDA0cFr7fm3tEzyQf7FSsaipIYhggbvejQ4GkhGYZ5jI_eyUjYfzK4FVHYyD5Hf3gr6YSL6GrrEXBj-o3WMm5Nj8AWUONjQHqgIjwvB55tgtOPIaow15HF3HXM5IIQiTwkrnNZSGcWU7xDfbJIioEvwcZEQH7vD3DAPNTgW2FJyMAr6hvHVcI3I6WZiTze-Oxui-7CzmWQk",
  "a1b2c3d4-1111-4000-8000-000000000006": "https://lh3.googleusercontent.com/aida-public/AB6AXuDbwGVIaMSHyLvwszWxgsrzIyuiUCr8ls4-XQ3ghjWdSs1L9WAUip0YCmytun6SHJI_wx9rxGdsAGrIKwdwSjQhtTEE8wLXwDqg9CvERs0hHuURyYCgNsR7tYTjeOnhxBKe_YDHGxioRtGSoooaPkyBL4KubwrTD1qs-Da7F-PEObt94U2GL4SdWKmLOhDXMqXfl0Vz1RdvLe4mg2hDy9gt8xzl7uexd6TGRVffDCPV-oLdeMdYqWihSsa41LG4je8EH8-QDesVEGE",
};

const defaultBreweryImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBpYzT7k3SLdciwFQTJfYRKsyeRqTm5rwV1KSl6XhKK3bqwQXEghzPykxDUqlHIgNBksqhRfxsXSatdv02XC85G9vVveHsohIYjXrBzBovPbF1tNn2ZFQXYVuKB3FxgZV_LpDxAz_L6Uc6JtxuLrFeZulrARCN2I4DXhxFb2KhMY40kLxsSd4O57yAyZdwCCrHrw8otnOHbJN1TRFtxxkzGGTqAXMj9AqCQAHIJXOUdf3P2B-bCOMcdttCDqMjROaW1IfIMq74HhL8";

export default async function BreweriesPage() {
  const { items: allBreweries } = await listBreweries(0, 50);

  return (
    <div className="bg-stone-50 text-stone-900 antialiased min-h-screen flex flex-col">
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-black tracking-tight text-stone-900 mb-2">Všechny pivovary</h1>
            <p className="text-stone-500">Prozkoumejte nejlepší světové producenty řemeslného piva</p>
          </div>

          {/* Brewery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allBreweries.map((brewery) => (
              <Link
                key={brewery.id}
                href={`/breweries/${brewery.id}`}
                className="bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
              >
                <div className="h-32 relative overflow-hidden">
                  <img src={breweryImages[brewery.id] ?? defaultBreweryImage} alt={brewery.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-stone-900 group-hover:text-orange-700 transition-colors">
                        {brewery.name}
                      </h3>
                      <p className="text-xs text-stone-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">location_on</span>
                        {brewery.city}, {brewery.country}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-stone-100 text-stone-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      {brewery.type}
                    </span>
                    <span className="bg-stone-100 text-stone-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      Zal. {brewery.established}
                    </span>
                  </div>
                  {brewery.description && (
                    <p className="text-xs text-stone-500 line-clamp-2">{brewery.description}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
