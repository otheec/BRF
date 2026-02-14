// Barrel file for Brewery feature types
// Types will be added when Brewery pages are implemented

export interface Brewery {
  id: number
  name: string
  country: string | null
  city: string | null
  beerCount: number
}

export interface BreweryDetail extends Omit<Brewery, 'beerCount'> {
  website: string | null
  description: string | null
  createdAt: string
  beers: BreweryBeer[]
}

export interface BreweryBeer {
  id: number
  name: string
  style: string | null
  abv: number | null
}

export interface CreateBreweryPayload {
  name: string
  country?: string | null
  city?: string | null
  website?: string | null
  description?: string | null
}

export interface UpdateBreweryPayload extends CreateBreweryPayload {
  id: number
}
