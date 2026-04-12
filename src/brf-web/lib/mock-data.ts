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


export function getBreweryById(id: string): Brewery | undefined {
  return breweries.find((b) => b.id === id);
}

export function getBeerById(id: string): Beer | undefined {
  return beers.find((b) => b.id === id);
}

export function getVenueById(id: string): Venue | undefined {
  return venues.find((v) => v.id === id);
}

export function getBeersByBrewery(breweryId: string): Beer[] {
  return beers.filter((b) => b.breweryId === breweryId);
}

export function getBreweryForBeer(breweryId: string): Brewery | undefined {
  return breweries.find((b) => b.id === breweryId);
}
