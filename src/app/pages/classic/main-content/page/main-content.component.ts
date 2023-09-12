import { Component, OnInit, effect, inject } from '@angular/core';
import { ApiResponseAllData, Country } from '@interfaces';
import { CountryService } from '@shared/services';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit{
  private readonly countryService = inject(CountryService);
  protected countries: Country[] = [];
  protected regions: string[] = [];
  protected isLoading: boolean = false;
  protected countriesLenght: number = 0;

  constructor(){
    effect(() => {
      this.countries = this.countryService.countriesSignal();
      this.countriesLenght = this.countryService.setCountryLenght(this.countries);
    });
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.getCountries();
  }

  private getCountries(): void{
    this.countryService.getCountries()
      .subscribe((response: ApiResponseAllData) => {
        this.handleResponse(response);
        this.isLoading = false;
      });
  }

  private handleResponse(response: ApiResponseAllData): void{
    this.countries = response.countries;
    this.regions = response.regions;
    this.countryService.countriesAuxSignal.set(response.countries);
    this.countriesLenght = this.countryService.setCountryLenght(this.countries);
  }
}
