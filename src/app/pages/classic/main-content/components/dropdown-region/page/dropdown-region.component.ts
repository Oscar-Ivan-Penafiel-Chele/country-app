import { Component, HostListener, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '@shared/services';
import { PrimengComponentsModule } from '@shared/components';

@Component({
  selector: 'app-dropdown-region',
  standalone: true,
  imports: [CommonModule, PrimengComponentsModule],
  templateUrl: './dropdown-region.component.html',
  styleUrls: ['./dropdown-region.component.scss']
})
export class DropdownRegionComponent{
  @Input()  regions: string[] = [];
  @Input()  isLoading: boolean = true;
  private readonly countryService = inject(CountryService);
  protected textPlaceHolder: string = "Filter by Region";

  private getOptionsSelect(): HTMLElement{
    const optionsSelect = document.getElementById('options')!;
    return optionsSelect;
  }

  private getItemsSelect(): NodeListOf<Element>{
    const items = document.querySelectorAll('.select__item');
    return items;
  }

  public toggleVisibility(): void{
    const options = this.getOptionsSelect();
    options.classList.toggle('show');
  }

  public selectedRegion(region: string, index: number): void{
    this.textPlaceHolder = region;
    this.hideOptions();
    this.activeItem(index);
    this.countryService.filterCountriesByRegion(region);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void{
    if(event.target instanceof HTMLElement && event.target.closest('.select')) return;
    else this.hideOptions();
  }

  private hideOptions():void{
    const options = this.getOptionsSelect();
    options.classList.remove('show')
  }

  private activeItem(index: number): void {
    const items = this.getItemsSelect();

    this.inactiveAllItems();
    items[index].classList.add('active');
  }
   
  private inactiveAllItems(): void {
    const items = this.getItemsSelect();

    items.forEach((item: Element) => {
      item.classList.remove('active');
    });
  }
}
