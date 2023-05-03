import { Component } from '@angular/core';
import {ServeiService} from "../servei.service";

@Component({
  selector: 'app-roba',
  templateUrl: './roba.component.html',
  styleUrls: ['./roba.component.css']
})
export class RobaComponent {
  prova:any;
  imatges: any[];

  constructor(private s: ServeiService) {

    const images={
    top:"http://localhost:3080/imatges/top",
    pantalo: "http://localhost:3080/imatges/pantalo",
    leggins:"http://localhost:3080/imatges/leggins",
    }
    this.imatges=[];
    this.imatges.push(images)
  }


  ngOnInit() {

  }


}
