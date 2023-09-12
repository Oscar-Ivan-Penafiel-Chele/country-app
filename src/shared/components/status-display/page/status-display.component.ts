import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent, NotFindDataComponent } from '@shared/components';

@Component({
  selector: 'app-status-display',
  standalone: true,
  imports: [CommonModule, LoaderComponent, NotFindDataComponent],
  templateUrl: './status-display.component.html',
  styleUrls: ['./status-display.component.scss']
})
export class StatusDisplayComponent {
  @Input() isLoading: boolean = true;
  @Input() countriesLenght: number = 0;

  protected readonly MESSAGE_LOADER = "Loading Information";
}
