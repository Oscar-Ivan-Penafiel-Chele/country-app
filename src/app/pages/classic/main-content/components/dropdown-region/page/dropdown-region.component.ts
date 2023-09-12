import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '@shared/services';

@Component({
  selector: 'app-dropdown-region',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-region.component.html',
  styleUrls: ['./dropdown-region.component.scss']
})
export class DropdownRegionComponent {
  @Input()  regions: string[] = [];
  private readonly countryService = inject(CountryService);

  selectRegion(event: any): void{
    const region = event.target.value;
    this.countryService.filterCountriesByRegion(region);
  }
}
