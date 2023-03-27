import {Component, OnInit} from '@angular/core';
import {ServeiService} from "../servei.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-cistella',
  templateUrl: './cistella.component.html',
  styleUrls: ['./cistella.component.css']
})
export class CistellaComponent implements OnInit{

  mostrar: any;


  constructor(private s:ServeiService, private http: HttpClient) {

     this.mostrar = this.s.productes;
  }


  ngOnInit() {
    const subject = document.querySelector('#subject')!;
    subject.insertAdjacentHTML('afterend',this.mostrar)

    console.log(this.mostrar)
   }


  pagar(pagar: string) {
    const data = new Date()
    const formatdata = data.toDateString() + " hora: " +data.getHours() + ":" + data.getMinutes()
    const text ={
      text: `/ Data: ${formatdata} Usuari: Acció: Pagar cistella \n`
    }
    this.http.post<any>("http://localhost:3080/log/pagar/cistella", text).subscribe();
  }


}
