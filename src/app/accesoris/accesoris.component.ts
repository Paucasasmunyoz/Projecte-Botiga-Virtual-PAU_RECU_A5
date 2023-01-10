import { Component } from '@angular/core';
import {ServeiService} from "../servei.service";

@Component({
  selector: 'app-accesoris',
  templateUrl: './accesoris.component.html',
  styleUrls: ['./accesoris.component.css']
})
export class AccesorisComponent {
  prova:any;


  constructor(private s: ServeiService) {
  }

  ngOnInit() {
  }

  addProducte(id: string){
    this.s.productes.push(document.getElementById(id)!.innerHTML)
  }
}
