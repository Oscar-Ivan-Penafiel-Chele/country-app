import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryLanguagesComponent } from '../../country-languages/page/country-languages.component';
import { CountryBordersComponent } from '../../country-borders/page/country-borders.component';
import { Country } from '@interfaces';

@Component({
  selector: 'app-country-information',
  standalone: true,
  imports: [CommonModule, CountryLanguagesComponent, CountryBordersComponent],
  templateUrl: './country-information.component.html',
  styleUrls: ['./country-information.component.scss']
})
export class CountryInformationComponent {
  @Input() country: Country = {} as Country;
}
