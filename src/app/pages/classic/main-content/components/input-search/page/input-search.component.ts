import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengComponentsModule } from '@shared/components';
import { CountryService } from '@shared/services';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PrimengComponentsModule],
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent {
  private readonly countryService = inject(CountryService);
  protected textSearch: string = "";

  protected searchCountry(event?: any): void{
    const search: string = this.textSearch.toLowerCase();
    this.countryService.filterCountriesByName(search);
  }

  protected clearSearch(): void{
    this.textSearch = "";
    this.searchCountry();
  }
}
