// Barrel file for Venue feature types
// Types will be added when the Venue API is implemented

export interface Venue {
  id: number
  name: string
  type: string | null
  city: string | null
  address: string | null
}
