import { Component, Input, Output, EventEmitter } from "@angular/core";

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
  @Output() onNhapMaKhuyenMai = new EventEmitter();
  constructor() {}
  nhapMaKhuyenMai() {
    this.onNhapMaKhuyenMai.emit(this.maKhuyenMai);
  }
}
