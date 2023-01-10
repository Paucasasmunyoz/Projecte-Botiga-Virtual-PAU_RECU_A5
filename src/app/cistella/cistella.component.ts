import {Component, OnInit} from '@angular/core';
import {ServeiService} from "../servei.service";

@Component({
  selector: 'app-cistella',
  templateUrl: './cistella.component.html',
  styleUrls: ['./cistella.component.css']
})
export class CistellaComponent implements OnInit{

  mostrar: any;

  constructor(private s:ServeiService) {

     this.mostrar = this.s.productes;
  }


  ngOnInit() {
    const subject = document.querySelector('#subject')!;
    subject.insertAdjacentHTML('afterend',this.mostrar)

    console.log(this.mostrar)
   }



}
