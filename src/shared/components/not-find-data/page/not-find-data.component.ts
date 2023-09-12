import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-find-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-find-data.component.html',
  styleUrls: ['./not-find-data.component.scss']
})
export class NotFindDataComponent {
  protected readonly URL_IMAGE: string = "../../../../../../assets/images/Oops! 404 Error with a broken robot-rafiki.svg";
  protected readonly MESSAGE_NOT_FOUND: string = "No Data Available!";
}
