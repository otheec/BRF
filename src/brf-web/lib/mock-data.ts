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
      "Spojení tradičních postupů s lesními ingrediencemi a spontánním kvašením.",
    established: 2014,
  },
  {
    id: "northbound",
    name: "Northbound Craft",
    city: "Vancouver",
    country: "Canada",
    type: "Micro",
    description:
      "Průkopníci organických ale, kteří posouvají hranice západopobřežního pivovarnictví.",
    established: 2011,
  },
  {
    id: "midnight-hops",
    name: "Midnight Hops",
    city: "Berlin",
    country: "Germany",
    type: "Brewpub",
    description: "Experimentální tmavé slady v srdci Berlína.",
    established: 2016,
  },
  {
    id: "crestline",
    name: "Crestline Brewing Co.",
    city: "Denver",
    country: "USA",
    type: "Taproom",
    description: "Zakalená, šťavnatá NEIPA a čistý ležák z Rocky Mountains.",
    established: 2018,
  },
  {
    id: "iron-range",
    name: "Iron Range Ales",
    city: "Minneapolis",
    country: "USA",
    type: "Micro",
    description: "Robustní ale ze středozápadu s moderním nádechem.",
    established: 2015,
  },
  {
    id: "flora-wild",
    name: "Flora Wild Ales",
    city: "Portland",
    country: "USA",
    type: "Nano",
    description:
      "100% spontánně a smíšeně kvašená divoká ale.",
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
      "Tropické mango, citrusová kůra a hladký, krémový dozvuk.",
    breweryId: "wildwood",
  },
  {
    id: "midnight-roast",
    name: "Midnight Roast",
    style: "Coffee Stout",
    abv: 8.2,
    description: "Etiopská zrna a kakao se sametovým dozvukem.",
    breweryId: "wildwood",
  },
  {
    id: "sun-drenched-haze",
    name: "Sun-Drenched Haze",
    style: "NEIPA",
    abv: 6.5,
    description:
      "Šťavnaté citrusy a tropické ovoce s hedvábnou texturou.",
    breweryId: "crestline",
    ibu: 42,
  },
  {
    id: "coastal-haze",
    name: "Coastal Haze IPA",
    style: "West Coast IPA",
    abv: 6.8,
    description: "S důrazem na borový chmel, pryskyřičná a zářivě čistá.",
    breweryId: "northbound",
  },
  {
    id: "obsidian-stout",
    name: "Obsidian Stout",
    style: "Imperial Stout",
    abv: 10.2,
    description: "Hořká čokoláda, espresso a hřejivý dozvuk.",
    breweryId: "midnight-hops",
  },
  {
    id: "alpine-lager",
    name: "Alpine Lager",
    style: "Czech Pilsner",
    abv: 4.5,
    description: "Svěží, čistý a nekonečně osvěžující.",
    breweryId: "crestline",
  },
  {
    id: "velvet-sour",
    name: "Velvet Sour",
    style: "Flanders Red",
    abv: 5.4,
    description: "Kyselá třešeň, dub a náznak vanilky.",
    breweryId: "flora-wild",
  },
  {
    id: "lawnmower-gold",
    name: "Lawnmower Gold",
    style: "Pilsner",
    abv: 4.5,
    description: "Svěží a čistý, ideální celodenní pivo.",
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
    description: "Otevřeno do 23:00. 24 rotujících čepů, jen lokální piva.",
    amenities: ["Dog Friendly", "Outdoor Seating", "Food"],
  },
  {
    id: "iron-forge",
    name: "Iron Forge Brewery",
    type: "Brewpub",
    city: "Portland",
    country: "OR",
    description: "Plná kuchyně a 16 domácích čepů.",
    amenities: ["Outdoor Seating", "Food"],
  },
  {
    id: "hops-cellar",
    name: "Hops & Cellar",
    type: "BottleShop",
    city: "Portland",
    country: "OR",
    description: "500+ vzácných plechovek a lahví. V pondělí zavřeno.",
    amenities: ["Dog Friendly"],
  },
  {
    id: "copper-tap",
    name: "The Copper Tap",
    type: "Taproom",
    city: "Vancouver",
    country: "BC",
    description: "42 rotujících čepů se zaměřením na lokální řemeslná piva.",
    amenities: ["Food", "WiFi"],
  },
  {
    id: "amber-lounge",
    name: "Amber Lounge",
    type: "Other",
    city: "Melbourne",
    country: "Australia",
    description: "Koktejly, řemeslné pivo a živý jazz.",
    amenities: ["Outdoor Seating", "Food"],
  },
  {
    id: "barrel-cask",
    name: "Barrel & Cask",
    type: "Taproom",
    city: "Denver",
    country: "CO",
    description: "Útulný taproom zaměřený na piva zrající v sudech.",
    amenities: ["Dog Friendly", "Food"],
  },
];

export const beerLogs: BeerLog[] = [
  {
    id: "log-1",
    beerName: "Cloud Runner",
    breweryName: "Wildwood Brewing Co.",
    venueName: "The Rusty Anchor",
    loggedAt: "28. 10. 2024",
    rating: 5,
    notes:
      "Neskutečně šťavnaté s výraznými tóny manga a ananasu. Jedna z nejlepších NEIPA, co jsem měl.",
  },
  {
    id: "log-2",
    beerName: "Midnight Roast",
    breweryName: "Wildwood Brewing Co.",
    venueName: "Iron Forge Brewery",
    loggedAt: "24. 10. 2024",
    rating: 4,
    notes:
      "Výjimečný charakter ovesného stoutu. Kávové tóny jsou výrazné, ale nepřevládají.",
  },
  {
    id: "log-3",
    beerName: "Alpine Lager",
    breweryName: "Crestline Brewing Co.",
    venueName: "The Copper Tap",
    loggedAt: "21. 10. 2024",
    rating: 4,
    notes: "Čistý a vyvážený. Přesně takový by měl být dobrý pilsner.",
  },
  {
    id: "log-4",
    beerName: "Velvet Sour",
    breweryName: "Flora Wild Ales",
    venueName: "Hops & Cellar",
    loggedAt: "19. 10. 2024",
    rating: 5,
    notes: "Komplexní kyselá třešeň a dub. Úžasné divoké ale.",
  },
  {
    id: "log-5",
    beerName: "Coastal Haze IPA",
    breweryName: "Northbound Craft",
    venueName: "Barrel & Cask",
    loggedAt: "15. 10. 2024",
    rating: 3,
    notes: "Solidní West Coast IPA, ale dneska mi přišla trochu moc hořká.",
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
