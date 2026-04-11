export interface Brewery {
  id: string;
  name: string;
  city: string;
  country: string;
  type: string;
  description: string;
  established: number;
}

export interface Beer {
  id: string;
  name: string;
  style: string;
  abv: number;
  description: string;
  breweryId: string;
  ibu?: number;
}

export interface Venue {
  id: string;
  name: string;
  type: "Taproom" | "Brewpub" | "BottleShop" | "Other";
  city: string;
  country: string;
  description: string;
  amenities: string[];
}

export interface BeerLog {
  id: string;
  beerName: string;
  breweryName: string;
  venueName: string;
  loggedAt: string;
  rating: number;
  notes: string;
}

export interface Article {
  id: string;
  title: string;
  author: string;
  publishedAt: string;
  tag: string;
  readTime: string;
  excerpt: string;
  content: ArticleSection[];
}

export interface ArticleImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ArticleSection {
  type: "paragraph" | "heading" | "quote" | "images";
  text?: string;
  images?: ArticleImage[];
}

export const breweries: Brewery[] = [
  {
    id: "wildwood",
    name: "Wildwood Brewing Co.",
    city: "Asheville",
    country: "USA",
    type: "Micro/Taproom",
    description:
      "Blending old-world techniques with forest-foraged adjuncts and wild fermentation.",
    established: 2014,
  },
  {
    id: "northbound",
    name: "Northbound Craft",
    city: "Vancouver",
    country: "Canada",
    type: "Micro",
    description:
      "Organic ale pioneers pushing the boundaries of West Coast brewing.",
    established: 2011,
  },
  {
    id: "midnight-hops",
    name: "Midnight Hops",
    city: "Berlin",
    country: "Germany",
    type: "Brewpub",
    description: "Experimental dark malts in the heart of Berlin.",
    established: 2016,
  },
  {
    id: "crestline",
    name: "Crestline Brewing Co.",
    city: "Denver",
    country: "USA",
    type: "Taproom",
    description: "Hazy, juicy NEIPAs and clean lagers from the Rockies.",
    established: 2018,
  },
  {
    id: "iron-range",
    name: "Iron Range Ales",
    city: "Minneapolis",
    country: "USA",
    type: "Micro",
    description: "Rugged Midwest ales with a modern twist.",
    established: 2015,
  },
  {
    id: "flora-wild",
    name: "Flora Wild Ales",
    city: "Portland",
    country: "USA",
    type: "Nano",
    description:
      "100% spontaneous and mixed fermentation wild ales.",
    established: 2019,
  },
];

export const beers: Beer[] = [
  {
    id: "cloud-runner",
    name: "Cloud Runner",
    style: "Hazy IPA",
    abv: 6.8,
    description:
      "Tropical mango, citrus zest, and a smooth, creamy finish.",
    breweryId: "wildwood",
  },
  {
    id: "midnight-roast",
    name: "Midnight Roast",
    style: "Coffee Stout",
    abv: 8.2,
    description: "Ethiopian beans and cacao with a velvety finish.",
    breweryId: "wildwood",
  },
  {
    id: "sun-drenched-haze",
    name: "Sun-Drenched Haze",
    style: "NEIPA",
    abv: 6.5,
    description:
      "Vibrant citrus and tropical fruit with a pillowy texture.",
    breweryId: "crestline",
    ibu: 42,
  },
  {
    id: "coastal-haze",
    name: "Coastal Haze IPA",
    style: "West Coast IPA",
    abv: 6.8,
    description: "Pine-forward, resinous, and brilliantly clear.",
    breweryId: "northbound",
  },
  {
    id: "obsidian-stout",
    name: "Obsidian Stout",
    style: "Imperial Stout",
    abv: 10.2,
    description: "Dark chocolate, espresso, and a warming finish.",
    breweryId: "midnight-hops",
  },
  {
    id: "alpine-lager",
    name: "Alpine Lager",
    style: "Czech Pilsner",
    abv: 4.5,
    description: "Crisp, clean, and endlessly crushable.",
    breweryId: "crestline",
  },
  {
    id: "velvet-sour",
    name: "Velvet Sour",
    style: "Flanders Red",
    abv: 5.4,
    description: "Tart cherry, oak, and a hint of vanilla.",
    breweryId: "flora-wild",
  },
  {
    id: "lawnmower-gold",
    name: "Lawnmower Gold",
    style: "Pilsner",
    abv: 4.5,
    description: "Crisp and clean, the perfect session beer.",
    breweryId: "wildwood",
  },
];

export const venues: Venue[] = [
  {
    id: "rusty-anchor",
    name: "The Rusty Anchor",
    type: "Taproom",
    city: "Portland",
    country: "OR",
    description: "Open until 11PM. 24 rotating taps, all local.",
    amenities: ["Dog Friendly", "Outdoor Seating", "Food"],
  },
  {
    id: "iron-forge",
    name: "Iron Forge Brewery",
    type: "Brewpub",
    city: "Portland",
    country: "OR",
    description: "Full kitchen and 16 house taps.",
    amenities: ["Outdoor Seating", "Food"],
  },
  {
    id: "hops-cellar",
    name: "Hops & Cellar",
    type: "BottleShop",
    city: "Portland",
    country: "OR",
    description: "500+ rare cans and bottles. Closed Mondays.",
    amenities: ["Dog Friendly"],
  },
  {
    id: "copper-tap",
    name: "The Copper Tap",
    type: "Taproom",
    city: "Vancouver",
    country: "BC",
    description: "42 rotating taps with a focus on local craft.",
    amenities: ["Food", "WiFi"],
  },
  {
    id: "amber-lounge",
    name: "Amber Lounge",
    type: "Other",
    city: "Melbourne",
    country: "Australia",
    description: "Craft cocktails, craft beer, and live jazz.",
    amenities: ["Outdoor Seating", "Food"],
  },
  {
    id: "barrel-cask",
    name: "Barrel & Cask",
    type: "Taproom",
    city: "Denver",
    country: "CO",
    description: "Cozy taproom with a focus on barrel-aged beers.",
    amenities: ["Dog Friendly", "Food"],
  },
];

export const beerLogs: BeerLog[] = [
  {
    id: "log-1",
    beerName: "Cloud Runner",
    breweryName: "Wildwood Brewing Co.",
    venueName: "The Rusty Anchor",
    loggedAt: "Oct 28, 2024",
    rating: 5,
    notes:
      "Super juicy with heavy notes of mango and pineapple. One of the best NEIPAs I've had.",
  },
  {
    id: "log-2",
    beerName: "Midnight Roast",
    breweryName: "Wildwood Brewing Co.",
    venueName: "Iron Forge Brewery",
    loggedAt: "Oct 24, 2024",
    rating: 4,
    notes:
      "Exceptional oatmeal stout character. Coffee notes are prominent but not overpowering.",
  },
  {
    id: "log-3",
    beerName: "Alpine Lager",
    breweryName: "Crestline Brewing Co.",
    venueName: "The Copper Tap",
    loggedAt: "Oct 21, 2024",
    rating: 4,
    notes: "Clean and balanced. Exactly what a German pilsner should be.",
  },
  {
    id: "log-4",
    beerName: "Velvet Sour",
    breweryName: "Flora Wild Ales",
    venueName: "Hops & Cellar",
    loggedAt: "Oct 19, 2024",
    rating: 5,
    notes: "Complex tart cherry and oak. Mind-blowing wild ale.",
  },
  {
    id: "log-5",
    beerName: "Coastal Haze IPA",
    breweryName: "Northbound Craft",
    venueName: "Barrel & Cask",
    loggedAt: "Oct 15, 2024",
    rating: 3,
    notes: "Solid West Coast IPA but a bit too bitter for my taste today.",
  },
];

export const articles: Article[] = [
  {
    id: "hop-harvest",
    title: "The Art of the Hop Harvest: From Vine to Vessel",
    author: "Marcus Thorne",
    publishedAt: "Oct 24, 2024",
    tag: "Feature Article",
    readTime: "5 min read",
    excerpt:
      "Every autumn in Yakima Valley, the air carries the intoxicating scents of pine, citrus, and earth as the hop harvest begins.",
    content: [
      {
        type: "paragraph",
        text: "Every autumn in Yakima Valley, the air carries the intoxicating scents of pine, citrus, and earth as the hop harvest begins. For brewers and hop growers alike, this is the most critical — and most celebrated — time of the brewing calendar.",
      },
      {
        type: "heading",
        text: "The Critical Window",
      },
      {
        type: "paragraph",
        text: "Harvest timing is everything. Pick too early and the hops yield grassy, underripe flavors that can overwhelm a delicate beer. Wait too long and the precious lupulin glands — the resinous yellow powder inside the hop cone that carries all that aroma and bitterness — begin to oxidize, resulting in cheesy, dull profiles that no brewer wants.",
      },
      {
        type: "images",
        images: [
          {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgJbxzi56YwAoimbQGZtpdgsqMrbbFYjw7ejKMJLZosMYVIVpncmot5ufqvVdFbUO5XnwZD_foDOGiNSiQAn1grQDyUDQJSSkMCpJIDDIyxhAFUQAtUvt447X07w0oUD-CUElOfs1zPqk-rGikw-CKa-nzVM7fhLMPwRoQovIl8f1Qzdh3aNxKwFjNYyWA1M8R90MuxdxvjhNL2-xaGmxDg9VJrVxxgUIFOLGmeoLOMRnsKoWEiuF2b2F1zzmPJBCDjIxJIU5-xkM",
            alt: "Fresh hops",
            caption: "Peak maturity lupulin glands.",
          },
          {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5Ay2_wB3zodaXqKS4li2SZ4yk3GlI9y56ZZheTFBGQivEsPJBkXFRxNcE4DPmSH610XMHm4e8DZv_bhAOrXEMBzd66J_cdFP_a5hAW7ovVhhrcBOE9JEeCCJJgjHsypYiQAtfiCO7S96HHfHJ2pcLaYM-Pc91sgqBCb90xWDHAevB_myM0XBWGht4p0OFkjjnbLF0MbwE6MEZ3nh3yKWoGhST_bCZLimmLmepP4dMOwZr4WDgUM2KNwqFLtI6_3IgjFpfn9k0zYI",
            alt: "Processing",
            caption: "Processing the day's yield.",
          },
        ],
      },
      {
        type: "heading",
        text: "Tradition Meets Technology",
      },
      {
        type: "paragraph",
        text: "Modern kilns can dry hops to precise moisture levels in a fraction of the time it once took. Yet many growers still rely on the time-honoured technique of rubbing a hop cone between their palms, assessing stickiness and scent with a tactile intimacy no sensor can replicate. The best operations blend both worlds.",
      },
      {
        type: "quote",
        text: "The hop harvest is the New Year's Eve of the brewing world. Everything leads up to it, and how it goes sets the tone for the entire year ahead.",
      },
      {
        type: "paragraph",
        text: "Fresh-hop ales — sometimes called wet-hop ales — take this urgency to its logical extreme. These beers use hops within 24 hours of harvest, before they can be kilned or pelletized. The result is a fleeting, once-a-year style that beer lovers travel miles to taste.",
      },
    ],
  },
  {
    id: "carbonation-science",
    title: "The Science of Carbonation",
    author: "Elena Vasquez",
    publishedAt: "Oct 20, 2024",
    tag: "Science",
    readTime: "3 min read",
    excerpt:
      "That lively tingle in every sip — it's not magic, it's chemistry. Understanding carbonation unlocks a new dimension of beer appreciation.",
    content: [
      {
        type: "paragraph",
        text: "That lively tingle in every sip of beer is not magic — it's dissolved CO2 escaping the liquid as pressure drops. Understanding carbonation is key to both brewing great beer and appreciating what's in your glass.",
      },
      {
        type: "heading",
        text: "Natural vs Forced",
      },
      {
        type: "paragraph",
        text: "Natural carbonation occurs when residual yeast consumes a small priming sugar addition, producing CO2 inside a sealed vessel. This method, used for bottle-conditioned ales and traditional cask beers, tends to produce finer, more persistent bubbles. Forced carbonation — pumping CO2 directly into a sealed tank — is faster and more controllable, making it the standard for large-scale lager production.",
      },
      {
        type: "heading",
        text: "Volumes by Style",
      },
      {
        type: "paragraph",
        text: "Different styles demand different carbonation levels, measured in volumes of CO2. A cask ale might clock in at just 1.5 volumes — barely fizzy. A German Weizen can reach 4.0 volumes, giving it that characteristic effervescence. Most American ales and lagers settle comfortably in the 2.4–2.8 range.",
      },
      {
        type: "paragraph",
        text: "Temperature matters too. Carbonation is more soluble in cold liquid, which is why a warm beer seems gassier and flat — the CO2 escapes more readily. Serving temperature isn't just about flavour; it fundamentally shapes how we perceive a beer's body and finish.",
      },
    ],
  },
  {
    id: "barrel-aging",
    title: "Barrel Aging: A Test of Ultimate Patience",
    author: "David Chen",
    publishedAt: "Oct 18, 2024",
    tag: "Deep Dive",
    readTime: "8 min read",
    excerpt:
      "Inside the darkened warehouse, rows of oak barrels sleep. What emerges months or years later is something entirely transformed.",
    content: [
      {
        type: "paragraph",
        text: "Inside a darkened warehouse, rows of oak barrels breathe quietly. What entered as an imperial stout or a wild ale will emerge — months or years later — as something entirely transformed. Barrel aging is the closest craft brewing gets to alchemy.",
      },
      {
        type: "heading",
        text: "Choosing the Right Barrel",
      },
      {
        type: "paragraph",
        text: "Bourbon barrels are the most common vessel for aging dark beers. The charred American oak imparts vanilla, caramel, and coconut notes, along with residual whiskey that adds warmth and complexity. Wine barrels — Chardonnay, Pinot Noir, Cabernet — are favoured for sour ales, lending tannins, stone fruit, and subtle acidity.",
      },
      {
        type: "heading",
        text: "The Angel's Share",
      },
      {
        type: "paragraph",
        text: "Every year, a percentage of the barrel's contents evaporates through the porous oak — a loss brewers call the angel's share. In humid cellars it can be as low as two per cent; in dry, warm conditions it can exceed ten. This concentration effect intensifies flavours but reduces yield, which partly explains why barrel-aged beers command premium prices.",
      },
      {
        type: "quote",
        text: "You put your best beer into the barrel, and you wait. Some batches are transcendent. Some are drains. That's the gamble — and the glory.",
      },
      {
        type: "paragraph",
        text: "Patience, ultimately, is the brewmaster's most essential ingredient when it comes to barrel aging. There is no shortcut. The wood will give up its gifts on its own schedule.",
      },
    ],
  },
  {
    id: "glassware-guide",
    title: "Choosing the Right Glass for Every Style",
    author: "Anna Kowalski",
    publishedAt: "Oct 15, 2024",
    tag: "Guide",
    readTime: "4 min read",
    excerpt:
      "Glassware is the often-overlooked variable in beer appreciation. The right shape can transform a good beer into a transcendent experience.",
    content: [
      {
        type: "paragraph",
        text: "Glassware is the often-overlooked variable in beer appreciation. Pour the same beer into a pint glass and a tulip, and you'll taste two different beers. The shape concentrates aroma, controls foam, and influences how the liquid reaches your palate.",
      },
      {
        type: "heading",
        text: "Tulip for IPAs",
      },
      {
        type: "paragraph",
        text: "The tulip glass — with its flared lip and bulbous body — is the perfect partner for aromatic beers like IPAs and Belgian ales. The shape funnels hop and ester aromas directly to the nose while the flare helps maintain a persistent head. If you own only one specialty glass, make it a tulip.",
      },
      {
        type: "heading",
        text: "Weizen Glass for Wheat Beers",
      },
      {
        type: "paragraph",
        text: "The tall, slender Weizen glass accommodates the voluminous foam head that a hefeweizen produces, while providing enough volume for the full pour. The narrow base concentrates the yeast in the last third of the pour, so you can decide how much cloudiness to add.",
      },
      {
        type: "heading",
        text: "Snifter for Imperials",
      },
      {
        type: "paragraph",
        text: "Strong, complex beers — barleywines, imperial stouts, barrel-aged ales — belong in a snifter. The small opening traps aroma, the wide bowl warms the beer gently in your hand (beneficial for high-ABV styles), and the smaller volume encourages slow, contemplative sipping.",
      },
      {
        type: "heading",
        text: "Pilsner Glass for Lagers",
      },
      {
        type: "paragraph",
        text: "The tall, tapered Pilsner glass shows off the brilliant clarity and fine carbonation of a well-made lager. It keeps the beer cold longer than wide-mouthed vessels and the narrow opening helps retain that delicate, grassy hop aroma that defines the style.",
      },
    ],
  },
];

export function getBreweryById(id: string): Brewery | undefined {
  return breweries.find((b) => b.id === id);
}

export function getBeerById(id: string): Beer | undefined {
  return beers.find((b) => b.id === id);
}

export function getVenueById(id: string): Venue | undefined {
  return venues.find((v) => v.id === id);
}

export function getArticleById(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}

export function getBeersByBrewery(breweryId: string): Beer[] {
  return beers.filter((b) => b.breweryId === breweryId);
}

export function getBreweryForBeer(breweryId: string): Brewery | undefined {
  return breweries.find((b) => b.id === breweryId);
}
