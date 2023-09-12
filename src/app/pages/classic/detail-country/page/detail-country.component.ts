import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '@interfaces';
import { CountryService } from '@shared/services';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.scss']
})
export class DetailCountryComponent implements OnInit{
  private readonly route = inject(ActivatedRoute);
  private readonly countryService = inject(CountryService);
  protected id: string = "";
  protected countriesLenght: number = 0;
  protected country: Country = {} as Country;
  protected isLoading: boolean = true;

  constructor(){}

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.id = this.id.toLowerCase();
    this.isLoading = true;
    this.getCountry();
  }

  private getCountry(): void{
    this.countryService.getCountryById(this.id)
      .subscribe((response: Country) => {
        this.countriesLenght = this.isFindCountry(response);
        this.country = response;
        this.isLoading = false;
        console.log(this.countriesLenght)
      })
  }

  private isFindCountry(country: Country): number{
    return Object.keys(country).length != 0 ? 1 : 0; 
  }
}
