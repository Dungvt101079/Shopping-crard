import { Injectable } from "@angular/core";
import { SanPham } from "../app/production.model";
@Injectable({
  providedIn: "root"
})
export class SanphamService {
  sanPham: SanPham[];
  getSanPham(): SanPham[] {
    this.sanPham = [
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
    return this.sanPham;
    // tslint:disable-next-line: no-unused-expression
  }
  xoaSanPham (id:number){
    const idSanSham = this.sanPham.findIndex(abc => id === abc.id);
    this.sanPham.splice(idSanSham, 1);
    return;
  }

}
