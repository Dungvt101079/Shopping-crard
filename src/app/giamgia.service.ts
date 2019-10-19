import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GiamgiaService {
  arrMaGiamGia = [
    { id: 1, ma: "CHIMAI", tile: 5 },
    { id: 2, ma: "DUNGVT", tile: 10 },
    { id: 2, ma: "MINHKIEN", tile: 2 }
  ];

  checkGiamGia(maGiamGia: string) {
    let tile = 0;
    this.arrMaGiamGia.forEach(item => {
      if (item.ma.toUpperCase() === maGiamGia.toUpperCase()) {
        // console.log(maGiamGia + item.tile + "-----");
        tile = item.tile;
      }
    });
    return tile;
  }
}
