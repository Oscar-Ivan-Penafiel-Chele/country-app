import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiResponseAllData, Country} from '@interfaces';
import { Observable, catchError, map, of } from 'rxjs';
import { FilterCountryService } from './filter-country.service';

type CountryKeys = keyof Country;

@Injectable({
  providedIn: 'root'
})
export class CountryService extends FilterCountryService{
  private readonly API_URL = '../../../assets/data.json';
  private readonly httpClient = inject(HttpClient);
  
  constructor() { 
    super()
  }

  public getCountries(): Observable<ApiResponseAllData>{
    return this.httpClient.get<Country[]>(this.API_URL)
      .pipe(
        map( countries => this.mapCountries(countries)),
        map( countries => this.formatResponse(countries) ),
        catchError((err: HttpErrorResponse) => of({} as ApiResponseAllData))
      );
  }

  public getCountryById(id: string): Observable<Country>{
    return this.httpClient.get<Country[]>(this.API_URL)
           .pipe(
              map( countries => this.filterCountry(countries, id)),
              map( country => this.extractCountry(country)),
              catchError((err: HttpErrorResponse) => of({} as Country))
           );
  }

  private formatResponse(countries: Country[]): ApiResponseAllData{
    let response: ApiResponseAllData = {} as ApiResponseAllData;
    const regions: string[] = this.getRegions(countries);

    response = {
      countries : countries,
      regions: regions
    }

    return response;
  }

  private getRegions(countries: Country[]): string[]{
    const regions = [...new Set(countries.map((country: Country) => country.region))];
    const regionsSort =  regions.sort();
          regionsSort.unshift('All');

    return regionsSort;
  }

  private mapCountries(countries: Country[]): Country[]{
    countries.map((country: Country) => {
      this.extractCountry(country);
    })

    return countries;
  }

  private extractCountry(country: Country): Country{
    if (this.isEmptyObject<Country>(country)) {
      return {} as Country;
    }

    return this.formatCountry(country);
  }

  private formatCountry(country: Country): Country {
    return {
      flags: country.flags ?? [this.NOT_FOUND],
      name: country.name ?? this.NOT_FOUND,
      nativeName: country.nativeName ?? this.NOT_FOUND,
      alpha3Code: country.alpha3Code ?? this.NOT_FOUND,
      population: country.population ?? this.NOT_FOUND,
      region: country.region ?? this.NOT_FOUND,
      subregion: country.subregion ?? this.NOT_FOUND,
      capital: country.capital ?? this.NOT_FOUND,
      topLevelDomain: country.topLevelDomain ?? [this.NOT_FOUND],
      currencies: country.currencies ?? [{name: this.NOT_FOUND}],
      languages: country.languages ?? [{name: this.NOT_FOUND}],
      borders: country.borders
    };
  }

  private isEmptyObject<T extends Object>(object: T): boolean{
    if(typeof object === 'object' && object !== null){
      return Object.keys(object).length === 0;
    }

    return true;
  }

 
}
