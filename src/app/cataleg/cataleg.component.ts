import {Component, OnInit} from '@angular/core';
import {ServeiService} from "../servei.service";
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient} from "@angular/common/http";
import {ProducteBoti} from "../producte-boti";
import {ServeiProdService} from "../servei-prod.service";


@Component({
  selector: 'app-cataleg',
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.css'],

})
export class CatalegComponent implements OnInit{

  prova:any;

  currentRate = 8;

  //@ts-ignore
  products: ProducteBoti[];


  constructor(private s: ServeiService, config: NgbRatingConfig, private http: HttpClient, private b: ServeiProdService) {
    config.max = 5;
    config.readonly = true;

  }

  ngOnInit() {
    this.b.info_product().subscribe(productes =>{
      this.products = productes;
    })
  }

  anadircarrito(productes: ProducteBoti): void{
    this.s.afegircistella(productes);
    alert('Producte afegit a la cistella')

    const data = new Date()
    const formatdata = data.toDateString() + " hora: " +data.getHours() + ":" + data.getMinutes()

    if (productes.nom=='500g de Creatina'){
      const text ={
        text: `/ Data: ${formatdata} Usuari: Acció: Producte creatina afegit a la cistella \n`
      }
      this.http.post<any>("http://localhost:3080/log/pro1", text).subscribe();
    }

    if (productes.nom=='2kg de Proteina'){
      const text ={
        text: `/ Data: ${formatdata} Usuari: Acció: Producte proteina afegit a la cistella \n`
      }
      this.http.post<any>("http://localhost:3080/log/pro2", text).subscribe();
    }

    if (productes.nom=='Pantaló Nike d\'home'){
      const text ={
        text: `/ Data: ${formatdata} Usuari: Acció: Producte pantaló Nike afegit a la cistella \n`
      }
      this.http.post<any>("http://localhost:3080/log/pro3", text).subscribe();
    }

    if (productes.nom=='Barretes energetiques'){
      const text ={
        text: `/ Data: ${formatdata} Usuari: Acció: Producte barretes afegit a la cistella \n`
      }
      this.http.post<any>("http://localhost:3080/log/pro4", text).subscribe();
    }

    if (productes.nom=='Tupper de plàstic'){
      const text ={
        text: `/ Data: ${formatdata} Usuari: Acció: Producte tupper de plàstic afegit a la cistella \n`
      }
      this.http.post<any>("http://localhost:3080/log/pro5", text).subscribe();
    }

    if (productes.nom=='Straps de tela'){
       const text ={
          text: `/ Data: ${formatdata} Usuari: Acció: Producte straps afegit a la cistella`
       }
       this.http.post<any>("http://localhost:3080/log/pro6", text).subscribe();
    }

    if (productes.nom=='Motxilla de competició'){
        const text ={
          text: `/ Data: ${formatdata} Usuari: Acció: Producte motxilla afegit a la cistella \n`
        }
        this.http.post<any>("http://localhost:3080/log/pro7", text).subscribe();
    }

    if (productes.nom=='Genollera'){
        const text ={
          text: `/ Data: ${formatdata} Usuari: Acció: Producte genolleres afegit a la cistella \n`
        }
        this.http.post<any>("http://localhost:3080/log/pro8", text).subscribe();
    }

    if (productes.nom=='Top Nike dona'){
        const text ={
          text: `/ Data: ${formatdata} Usuari: Acció: Producte top Nike afegit a la cistella \n`
        }
        this.http.post<any>("http://localhost:3080/log/pro9", text).subscribe();
    }

    if (productes.nom=='Leggins Nike dona'){
        const text ={
          text: `/ Data: ${formatdata} Usuari: Acció: Producte Leggins Nike afegit a la cistella \n`
        }
        this.http.post<any>("http://localhost:3080/log/pro10", text).subscribe();

    }
}

}
