import { Component} from '@angular/core';

@Component({
  selector: 'app-bottom_card',
  templateUrl: './bottom-card.component.html',
  // styleUrls: ['./bottom-card.component.css']
})
export class BottomCardComponent {

  Subtotal_number: number =210.97
  Tax_number: number= 21.10
  Total_number: number= 21.078
  constructor() { }



}
