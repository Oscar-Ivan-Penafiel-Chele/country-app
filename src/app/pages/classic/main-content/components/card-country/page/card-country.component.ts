import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Country } from '@interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-country',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.scss']
})
export class CardCountryComponent {
  @Input() public countries: Country[] = [];
  private readonly router = inject(Router);

  protected redirectDetail(country: Country): void{
    const id = country.name;
    this.router.navigate([`/detail-country/${id}`]);
  }
}
