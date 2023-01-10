import { Component } from '@angular/core';
import {ServeiService} from "../servei.service";

@Component({
  selector: 'app-roba',
  templateUrl: './roba.component.html',
  styleUrls: ['./roba.component.css']
})
export class RobaComponent {
  prova:any;


  constructor(private s: ServeiService) {
  }

  ngOnInit() {
  }

  addProducte(id: string){
    this.s.productes.push(document.getElementById(id)!.innerHTML)
  }
}
