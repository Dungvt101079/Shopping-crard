import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { SanPham } from "../app/production.model";
import localeFr from '@angular/common/locales/vi';
registerLocaleData(localeFr, 'vi');


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
  Subtotal_number: number=30000000;
  Tax_number: number=3000000;
  Total_number : number=330000000
}

