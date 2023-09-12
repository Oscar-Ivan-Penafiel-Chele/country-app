import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-borders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-borders.component.html',
  styleUrls: ['./country-borders.component.scss']
})
export class CountryBordersComponent {
  @Input() borders: string[] = [];
}
