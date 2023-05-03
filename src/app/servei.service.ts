import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProducteBoti} from "./producte-boti";

class Productes {
}

@Injectable({
  providedIn: 'root'
})
export class ServeiService {

  // getProducts():Observable<Productes[]>{
  //   return this.http.get<Productes>('http://localhost:3080/Productes');
  // }

  cistella: ProducteBoti[]= [];

  afegircistella(product: ProducteBoti){
    this.cistella.push(product);
  }

  agafarProCataleg(){
    return this.cistella;
  }

  EliminarCistellaCompleta(){
    this.cistella = [];
    return this.cistella;
  }




  constructor(private http: HttpClient) {
  }



}
