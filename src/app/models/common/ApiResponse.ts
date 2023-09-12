import { Country } from "./Country";

export interface ApiResponseAllData{
  countries: Country[],
  regions: string[]
}

export interface ApiResponseCountry{
  country: Country
}