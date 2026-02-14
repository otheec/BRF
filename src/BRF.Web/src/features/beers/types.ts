// Barrel file for Beer feature types
// Types will be added when Beer pages are implemented

export interface Beer {
  id: number
  name: string
  style: string | null
  abv: number | null
}

export interface BeerDetail extends Beer {
  description: string | null
  createdAt: string
  breweryId: number | null
  breweryName: string | null
}

export interface CreateBeerPayload {
  name: string
  style?: string | null
  abv?: number | null
  description?: string | null
  breweryId?: number | null
}

export interface UpdateBeerPayload extends CreateBeerPayload {
  id: number
}
