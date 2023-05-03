import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProducteBoti} from "./producte-boti";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServeiProdService {

  info_product():Observable<ProducteBoti[]>{
    return this.http.get<ProducteBoti[]>("http://localhost:3080/productes");
  }

  constructor(private http: HttpClient) { }
}
