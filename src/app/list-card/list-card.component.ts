import { Component, Input, Output, EventEmitter } from "@angular/core";
import { SanPham } from "../production.model";

@Component({
  selector: "app-list-card",
  templateUrl: "./list-card.component.html"
  // styleUrls: ['./list-card.component.css']
})
export class ListCardComponent {
  @Input() sanpham: SanPham[];
  @Output() onNhapSoLuong = new EventEmitter();
  @Output() onDeleteSanPham = new EventEmitter();
  constructor() {}
  onChange_SoLuong(id: number, input_SoLuong: HTMLInputElement) {
    // console.log(
    //   "Tên sản phẩm:" +
    //     this.sanpham[this.sanpham.findIndex(abc => id === abc.id)].ten
    // );
    console.log("Giá trị số lượng:" + input_SoLuong.value);
    if (parseInt(input_SoLuong.value) < 0) {
      // alert("Không nhập số âm");
      input_SoLuong.value = "0";
    } else {
      this.onNhapSoLuong.emit([input_SoLuong.value, id]);
    }
    // this.onNhapSoLuong.emit([input_SoLuong.value, id]);
  }
  onDelete(id: number) {
    const idSanSham = this.sanpham.findIndex(abc => id === abc.id);
    {
      if (idSanSham >= 0) {
        alert("Đã xóa sản phẩm " + this.sanpham[idSanSham].ten);
        // this.sanpham.splice(idSanSham, 1);
        this.onDeleteSanPham.emit(id);
      }
    }
  }
}
