import { Component } from "@angular/core";
import { SanPham } from "../production.model";
@Component({
  selector: "app-list-card",
  templateUrl: "./list-card.component.html"
  // styleUrls: ['./list-card.component.css']
})
export class ListCardComponent {
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
  constructor() {}

  onDelete(id: number) {
    const idsanpam = this.sanpham.findIndex(SanPham => id === SanPham.id);
    {
      if (idsanpam !== -1) {
        this.sanpham.splice(idsanpam, 1);
      }
    }
  }
}
