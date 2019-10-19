import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-header-card',
  templateUrl: './header-card.component.html',
  // styleUrls: ['./header-card.component.css']
})
export class HeaderCardComponent  {
@Input() numberItems: number
  constructor() {   }



}
