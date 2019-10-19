import { Component, OnInit } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import { SanPham } from "../app/production.model";
import localeFr from "@angular/common/locales/vi";
import { SanphamService } from "./sanpham.service";
import { GiamgiaService } from "./giamgia.service";
registerLocaleData(localeFr, "vi");

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  sanpham: SanPham[];
  tiLeGiamGia: number = 0;
  constructor(
    public sevicesSanPham: SanphamService,
    public giamGiaService: GiamgiaService
  ) {
    this.sanpham = this.sevicesSanPham.sanPham;
  }
  ngOnInit() {
    this.sanpham = this.sevicesSanPham.getSanPham();
  }

  title = "shopping-cart của DungVT";
  // sanpham: SanPham[] = [
  //   {
  //     id: 1,
  //     ten: "Sẩn phẩm 1",
  //     anh: "https://via.placeholder.com/200x150",
  //     mota: "Description for product item number 1",
  //     gia: 300000,
  //     soluong: 2
  //   },
  //   {
  //     id: 2,
  //     ten: "Sẩn phẩm 2",
  //     anh: "//via.placeholder.com/200x150",
  //     mota: "Description for product item number 2",
  //     gia: 70000,
  //     soluong: 1
  //   }
  // ];
  giaTriKhuyenMai: number = 0;
  soLuongSP: number = 0;
  subTotalNumber: number = 0;
  taxNumber: number = 0;
  totalNumber: number = 0;
  numberVAT: number = 10;
  maKhuyenMai: string = "";
  tinhtoan() {
    let soLuongSP = 0;
    let subTotalNumber = 0;
    this.sanpham.forEach(item => {
      subTotalNumber += item.gia * item.soluong;
      soLuongSP += item.soluong * 1;
    });
    this.soLuongSP = soLuongSP;
    this.subTotalNumber = subTotalNumber;
    this.taxNumber = (this.subTotalNumber / 100) * this.numberVAT;

    this.giaTriKhuyenMai =
      ((this.subTotalNumber + this.taxNumber) * this.tiLeGiamGia) / 100;

    this.totalNumber =
      this.subTotalNumber + this.taxNumber - this.giaTriKhuyenMai;
    // // console.log("&&&&&&&&&&&&&&&&&");
  }

  ngDoCheck(): void {
    this.tinhtoan();
  }

  onNhapMaKhuyenMai(maKhuyenMai: string) {
    this.maKhuyenMai = maKhuyenMai.toLocaleUpperCase();
    //  console.log("=======$$$$$$$$$===");
    this.tiLeGiamGia = this.giamGiaService.checkGiamGia(this.maKhuyenMai);
    // console.log("=======33==="+this.tiLeGiamGia );
    // alert(maKhuyenMai);
    // if (maKhuyenMai.toUpperCase() === "DUNGVT") {
    //   this.subTotalNumber = this.subTotalNumber * (1 + 0.05);
    //   this.taxNumber = this.taxNumber * (1 + 0.05);
    //   this.totalNumber = this.totalNumber * (1 + 0.05);
    //   this.giaTriKhuyenMai = this.totalNumber * 0.05;
    // } else {
    //   this.subTotalNumber = 0;
    //   // tslint:disable-next-line: forin
    //   for (const i in this.sanpham) {
    //     // console.log(item + '---');
    //     this.subTotalNumber =
    //       this.subTotalNumber + this.sanpham[i].gia * this.sanpham[i].soluong;
    //   }
    //   this.taxNumber = (this.subTotalNumber / 100) * this.numberVAT;
    //   this.totalNumber = this.subTotalNumber + this.taxNumber;
    // }
    // this.tinhtoan();
  }
  onNhapSoLuong(soLuong) {
    this.subTotalNumber = 0;
    this.sanpham[this.sanpham.findIndex(abc => soLuong[1] === abc.id)].soluong =
      soLuong[0];
    // this.tinhtoan();
    // this.soLuongSP = 0;
    // // tslint:disable-next-line: forin
    // for (const id in this.sanpham) {
    //   // console.log(item + '---');
    //   this.subTotalNumber =
    //     this.subTotalNumber + this.sanpham[id].gia * this.sanpham[id].soluong;
    //   this.soLuongSP += this.sanpham[id].soluong;
    //   console.log(
    //     this.soLuongSP + " this.soLuongSP" + this.sanpham[id].soluong
    //   );
    // }
    // this.taxNumber = (this.subTotalNumber / 100) * this.numberVAT;
    // this.totalNumber = this.subTotalNumber + this.taxNumber;
    // console.log(this.soLuongSP + " this.soLuongSP");
  }
  onDeleteSanPham(id: number) {
    this.sevicesSanPham.xoaSanPham(id);
    // console.log("Chay toi day ---" + id);
    // const idSanSham = this.sanpham.findIndex(abc => id === abc.id);
    // this.sanpham.splice(idSanSham, 1);
    //   this.subTotalNumber = 0;
    //   this.soLuongSP = 0;
    //   // tslint:disable-next-line: forin
    //   for (const i in this.sanpham) {
    //     // console.log(item + '---');
    //     this.subTotalNumber =
    //       this.subTotalNumber + this.sanpham[i].gia * this.sanpham[i].soluong;
    //     this.soLuongSP += this.sanpham[i].soluong;
    //   }
    //   this.taxNumber = (this.subTotalNumber / 100) * this.numberVAT;
    //   this.totalNumber = this.subTotalNumber + this.taxNumber;
    // this.tinhtoan();
  }
}
