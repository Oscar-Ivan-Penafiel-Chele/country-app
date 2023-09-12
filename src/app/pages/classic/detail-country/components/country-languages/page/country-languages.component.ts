import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Language } from '@interfaces';

@Component({
  selector: 'app-country-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-languages.component.html',
  styleUrls: ['./country-languages.component.scss']
})
export class CountryLanguagesComponent {
  @Input() languages: Language[] = [];
}
