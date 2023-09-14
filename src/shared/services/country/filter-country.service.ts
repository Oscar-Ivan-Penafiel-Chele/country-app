import { Injectable, effect, signal } from '@angular/core';
import { Country } from '@interfaces';

@Injectable({
  providedIn: 'root'
})
export class FilterCountryService {
  protected readonly NOT_FOUND: string = 'Not Found';
  public countriesAuxSignal = signal<Country[]>([]);
  public countriesSignal = signal<Country[]>([]);
  public nameSearch: string = "";
  public regionSearch: string ="";
  
  constructor() { 
    effect(() => {
      this.countriesSignal.set(this.countriesAuxSignal());
    }, {allowSignalWrites: true});
  }

  matchBorderCountry(borders: string[], countries: Country[]): string[]{
    const matchBorders: string[] = [];

    if( borders === undefined )  return [`${this.NOT_FOUND}`];

    borders.forEach((item) => {
      countries.forEach((country) => {
        if(country.alpha3Code === item){
          matchBorders.push(country.name)
        }
      })
    })

    return matchBorders;
  }

  filterCountry(countries: Country[], id: string): Country{
    let country: Country;
    const findCountry = countries.filter((country) => country.name.toLowerCase().includes(id));

    if(findCountry.length === 0) return {} as Country;

    country = findCountry[0];
    country.borders = this.matchBorderCountry(country.borders, countries);

    return country;
  }
  
  filterByName(countries: Country[], textSearch: string): Country[]{
    if(textSearch.trim().length == 0){
      return countries;
    }

    const matchCountry = countries.filter((country) => (country.name)
                                      .toLowerCase()
                                      .includes(textSearch));
    return matchCountry;
  }

  filterByRegion(countries: Country[], region: string): Country[]{
    if(region == 'All'){
      return countries;
    }

    const matchCountry = countries.filter((country) => (country.region)
                                      .includes(region));
  
    return matchCountry;
  }

  public filterCountriesByName(textSearch: string): void{
    this.nameSearch = textSearch;
    this.applyFilters();
  }

  public filterCountriesByRegion(region: string): void{
    this.regionSearch = region;
    this.applyFilters();
  }

  private applyFilters(): void{
    let filteredCountries: Country[] = [];

    if(this.isEmptyValue(this.regionSearch) && (this.isEmptyValue(this.nameSearch))){
      filteredCountries = this.countriesAuxSignal();
    }else{
      let countriesToFilter = this.countriesAuxSignal();

      if(!this.isEmptyValue(this.regionSearch)){
        countriesToFilter = this.filterByRegion(this.countriesAuxSignal(), this.regionSearch);
      }

      if(!this.isEmptyValue(this.nameSearch)){
        filteredCountries = this.filterByName(countriesToFilter, this.nameSearch);
      }else{
        filteredCountries = countriesToFilter;
      }
    }

    this.countriesSignal.update(() => filteredCountries);
    this.setCountryLenght(filteredCountries);
  }

  private isEmptyValue(valueSearch: string): boolean{
    return valueSearch.length === 0 || valueSearch === '';
  }

  public setCountryLenght(countries: Country[]): number{
    return countries.length;
  }
}
