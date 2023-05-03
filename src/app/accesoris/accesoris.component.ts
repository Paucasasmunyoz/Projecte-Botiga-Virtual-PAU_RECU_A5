import { Component } from '@angular/core';
import {ServeiService} from "../servei.service";

@Component({
  selector: 'app-accesoris',
  templateUrl: './accesoris.component.html',
  styleUrls: ['./accesoris.component.css']
})
export class AccesorisComponent {
  prova:any;
  imatges: any[];


  constructor(private s: ServeiService) {
    const images= {
      motxilla: "http://localhost:3080/imatges/motxilla",
      genollera: "http://localhost:3080/imatges/genollera",
      straps: "http://localhost:3080/imatges/strap",
    }

    this.imatges=[];
    this.imatges.push(images)
  }

  ngOnInit() {
  }


}
