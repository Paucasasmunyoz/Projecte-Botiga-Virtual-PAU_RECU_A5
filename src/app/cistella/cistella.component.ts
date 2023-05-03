import {Component, OnInit} from '@angular/core';
import {ServeiService} from "../servei.service";
import {HttpClient} from "@angular/common/http";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-cistella',
  templateUrl: './cistella.component.html',
  styleUrls: ['./cistella.component.css']
})
export class CistellaComponent implements OnInit{

  mostrar: any;
  cistella = this.s.agafarProCataleg()


  constructor(private s:ServeiService, private http: HttpClient, private datePipe: DatePipe) {


  }


  ngOnInit() {
    const subject = document.querySelector('#subject')!;
    subject.insertAdjacentHTML('afterend',this.mostrar)

    console.log(this.mostrar)
   }

  public preutotalcistella():number {
    let totalcistella: number = 0;
    for(let producte of this.cistella){
      totalcistella+=(producte.preu)
    }
    return totalcistella;
  }

  EliminarCistellaCompleta(){
    this.cistella = [];
    return this.cistella;
  }


  user ='invitado';
  data_prod : any;

  pagar(pagar: string) {
    const data1 = new Date()
    const formatdata = data1.toDateString() + " hora: " +data1.getHours() + ":" + data1.getMinutes()

    const text ={
      text: `/ Data: ${formatdata} Usuari: Acció: Pagar cistella \n`
    }


    const data = new Date();
    this.data_prod= this.datePipe.transform(data,'yyyy-MM-dd');


    for(let i=0;i<this.cistella.length;i++){
      let query = `INSERT INTO botigaprjmarcpau.historial (usuari, producte , oferta, data) VALUES (?,?,?,?);
      let values =[this.user,this.cistella[i].id,false,this.data_prod]`;


      console.log('Producte afegit')

      this.http.post('http://localhost:3080/afegir_prod_hist',{query}).subscribe();
    }


    this.http.post<any>("http://localhost:3080/log/pagar/cistella", text).subscribe();

    this.s.EliminarCistellaCompleta()

    alert('Has realitzat la compra')




  }



}
