import { Component, Input } from "@angular/core";
import { SanPham } from "../production.model";
import { Alert } from "selenium-webdriver";
@Component({
  selector: "app-list-card",
  templateUrl: "./list-card.component.html"
  // styleUrls: ['./list-card.component.css']
})
export class ListCardComponent {
  @Input() sanpham: SanPham[];
  constructor() {}
  onChange_SoLuong(id: number, input_SoLuong: HTMLInputElement) {
    console.log(
      "Tên sản phẩm:" +
        this.sanpham[this.sanpham.findIndex(abc => id === abc.id)].ten
    );
    console.log("Giá trị số lượng:" + input_SoLuong.value);
  }
  onDelete(id: number) {
    const idSanSham = this.sanpham.findIndex(abc => id === abc.id);
    {
      if (idSanSham >= 0) {
        alert("Đã xóa sản phẩm " + this.sanpham[idSanSham].ten);
        this.sanpham.splice(idSanSham, 1);
      }
    }
  }
}
