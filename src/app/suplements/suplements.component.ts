import { Component } from '@angular/core';
import {ServeiService} from "../servei.service";

@Component({
  selector: 'app-suplements',
  templateUrl: './suplements.component.html',
  styleUrls: ['./suplements.component.css']
})
export class SuplementsComponent {

  prova:any;


  constructor(private s: ServeiService) {
  }

  ngOnInit() {
  }

  addProducte(id: string){
    this.s.productes.push(document.getElementById(id)!.innerHTML)
  }
}
