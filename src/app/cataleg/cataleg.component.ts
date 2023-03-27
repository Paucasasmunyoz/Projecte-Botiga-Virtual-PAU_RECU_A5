import {Component, OnInit} from '@angular/core';
import {ServeiService} from "../servei.service";
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-cataleg',
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.css'],

})
export class CatalegComponent implements OnInit{

  prova:any;

  currentRate = 8;

  imatges: any[];


  constructor(private s: ServeiService, config: NgbRatingConfig, private http: HttpClient) {
    config.max = 5;
    config.readonly = true;

    const images={
      creatina: "http://localhost:3080/imatges/creatinas",
      proteina: "http://localhost:3080/imatges/proteinaaa",
      pantalo: "http://localhost:3080/imatges/pantalo",
      barrita:"http://localhost:3080/imatges/barrita",
      tuperr:"http://localhost:3080/imatges/tuper",
      strap:"http://localhost:3080/imatges/strap",
      motxilla:"http://localhost:3080/imatges/motxilla",
      genollera:"http://localhost:3080/imatges/genollera",
      top:"http://localhost:3080/imatges/top",
      leggins:"http://localhost:3080/imatges/leggins",
    }

    this.imatges=[];
    this.imatges.push(images)

  }

  ngOnInit() {
  }

  addProducte1(id: string){
      this.s.productes.push(document.getElementById(id)!.innerHTML)

    const data = new Date()
    const formatdata = data.toDateString() + " hora: " +data.getHours() + ":" + data.getMinutes()
    const text ={
        text: `/ Data: ${formatdata} Usuari: Acció: Producte creatina afegit a la cistella \n`
    }
      this.http.post<any>("http://localhost:3080/log/pro1", text).subscribe();
    }

  addProducte2(id: string){
    this.s.productes.push(document.getElementById(id)!.innerHTML)
    const data = new Date()
    const formatdata = data.toDateString() + " hora: " +data.getHours() + ":" + data.getMinutes()
    const text ={
      text: `/ Data: ${formatdata} Usuari: Acció: Producte proteina afegit a la cistella \n`
    }
    this.http.post<any>("http://localhost:3080/log/pro2", text).subscribe();
  }


  addProducte3(id: string){
    this.s.productes.push(document.getElementById(id)!.innerHTML)
    const data = new Date()
    const formatdata = data.toDateString() + " hora: " +data.getHours() + ":" + data.getMinutes()
    const text ={
      text: `/ Data: ${formatdata} Usuari: Acció: Producte pantaló Nike afegit a la cistella \n`
    }
    this.http.post<any>("http://localhost:3080/log/pro3", text).subscribe();
  }


  addProducte4(id: string){
    this.s.productes.push(document.getElementById(id)!.innerHTML)
    const data = new Date()
    const formatdata = data.toDateString() + " hora: " +data.getHours() + ":" + data.getMinutes()
    const text ={
      text: `/ Data: ${formatdata} Usuari: Acció: Producte barretes afegit a la cistella \n`
    }
    this.http.post<any>("http://localhost:3080/log/pro4", text).subscribe();
  }

  addProducte5(id: string){
    this.s.productes.push(document.getElementById(id)!.innerHTML)
    const data = new Date()
    const formatdata = data.toDateString() + " hora: " +data.getHours() + ":" + data.getMinutes()
    const text ={
      text: `/ Data: ${formatdata} Usuari: Acció: Producte tupper de plàstic afegit a la cistella \n`
    }
    this.http.post<any>("http://localhost:3080/log/pro5", text).subscribe();
  }

  addProducte6(id: string){
    this.s.productes.push(document.getElementById(id)!.innerHTML)
    const data = new Date()
    const formatdata = data.toDateString() + " hora: " +data.getHours() + ":" + data.getMinutes()
    const text ={
      text: `/ Data: ${formatdata} Usuari: Acció: Producte straps afegit a la cistella`
    }
    this.http.post<any>("http://localhost:3080/log/pro6", text).subscribe();
  }

  addProducte7(id: string){
    this.s.productes.push(document.getElementById(id)!.innerHTML)
    const data = new Date()
    const formatdata = data.toDateString() + " hora: " +data.getHours() + ":" + data.getMinutes()
    const text ={
      text: `/ Data: ${formatdata} Usuari: Acció: Producte motxilla afegit a la cistella \n`
    }
    this.http.post<any>("http://localhost:3080/log/pro7", text).subscribe();
  }

  addProducte8(id: string){
    this.s.productes.push(document.getElementById(id)!.innerHTML)
    const data = new Date()
    const formatdata = data.toDateString() + " hora: " +data.getHours() + ":" + data.getMinutes()
    const text ={
      text: `/ Data: ${formatdata} Usuari: Acció: Producte genolleres afegit a la cistella \n`
    }
    this.http.post<any>("http://localhost:3080/log/pro8", text).subscribe();
  }


  addProducte9(id: string){
    this.s.productes.push(document.getElementById(id)!.innerHTML)
    const data = new Date()
    const formatdata = data.toDateString() + " hora: " +data.getHours() + ":" + data.getMinutes()
    const text ={
      text: `/ Data: ${formatdata} Usuari: Acció: Producte top Nike afegit a la cistella \n`
    }
    this.http.post<any>("http://localhost:3080/log/pro9", text).subscribe();
  }

  addProducte10(id: string){
    this.s.productes.push(document.getElementById(id)!.innerHTML)
    const data = new Date()
    const formatdata = data.toDateString() + " hora: " +data.getHours() + ":" + data.getMinutes()
    const text ={
      text: `/ Data: ${formatdata} Usuari: Acció: Producte Leggins Nike afegit a la cistella \n`
    }
    this.http.post<any>("http://localhost:3080/log/pro10", text).subscribe();
  }

}
