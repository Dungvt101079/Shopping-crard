import { Component, Input } from "@angular/core";

@Component({
  selector: "app-bottom_card",
  templateUrl: "./bottom-card.component.html"
  // styleUrls: ['./bottom-card.component.css']
})
export class BottomCardComponent {
  maKhuyenMai: string = "";
  @Input() Subtotal_number: number ;
  @Input() Tax_number: number ;
  @Input() Total_number: number ;
  constructor() {}
  nhapMaKhuyenMai() {
    console.log(this.maKhuyenMai);
  }
}
