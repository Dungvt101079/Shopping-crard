import { Component } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import { SanPham } from "../app/production.model";
import localeFr from "@angular/common/locales/vi";
registerLocaleData(localeFr, "vi");

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "shopping-cart của DungVT";
  sanpham: SanPham[] = [
    {
      id: 1,
      ten: "Sẩn phẩm 1",
      anh: "https://via.placeholder.com/200x150",
      mota: "Description for product item number 1",
      gia: 300000,
      soluong: 2
    },
    {
      id: 2,
      ten: "Sẩn phẩm 2",
      anh: "//via.placeholder.com/200x150",
      mota: "Description for product item number 2",
      gia: 70000,
      soluong: 1
    }
  ];
  soLuongSP: number = 3;
  subTotalNumber: number = 30000000;
  taxNumber: number = 3000000;
  totalNumber: number = this.subTotalNumber + this.taxNumber;
  numberVAT: number = 10;
  onNhapMaKhuyenMai(maKhuyenMai: string) {
    alert(maKhuyenMai);
  }
  onNhapSoLuong(soLuong) {
    this.subTotalNumber = 0;
    this.sanpham[this.sanpham.findIndex(abc => soLuong[1] === abc.id)].soluong =
      soLuong[0];
    this.soLuongSP = 0;
    // tslint:disable-next-line: forin
    for (const id in this.sanpham) {
      // console.log(item + '---');
      this.subTotalNumber =
        this.subTotalNumber + this.sanpham[id].gia * this.sanpham[id].soluong;
      this.soLuongSP = +this.soLuongSP + this.sanpham[id].soluong;
      console.log(
        this.soLuongSP + " this.soLuongSP" + this.sanpham[id].soluong
      );
    }
    this.taxNumber = (this.subTotalNumber / 100) * this.numberVAT;
    this.totalNumber = this.subTotalNumber + this.taxNumber;
    console.log(this.soLuongSP + " this.soLuongSP");
  }
  onDeleteSanPham(id: number) {
    // console.log("Chay toi day ---" + id);
    const idSanSham = this.sanpham.findIndex(abc => id === abc.id);
    this.sanpham.splice(idSanSham, 1);
    this.subTotalNumber = 0;
    this.soLuongSP = 0;
    // tslint:disable-next-line: forin
    for (const i in this.sanpham) {
      // console.log(item + '---');
      this.subTotalNumber =
        this.subTotalNumber + this.sanpham[i].gia * this.sanpham[i].soluong;
      this.soLuongSP = +this.soLuongSP + this.sanpham[i].soluong;
    }
    this.taxNumber = (this.subTotalNumber / 100) * this.numberVAT;
    this.totalNumber = this.subTotalNumber + this.taxNumber;
  }
}
