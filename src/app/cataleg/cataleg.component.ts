import {Component, OnInit} from '@angular/core';
import {ServeiService} from "../servei.service";

@Component({
  selector: 'app-cataleg',
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.css']
})
export class CatalegComponent implements OnInit{

  prova:any;


  constructor(private s: ServeiService) {
  }

  ngOnInit() {
  }

  addProducte(id: string){
      this.s.productes.push(document.getElementById(id)!.innerHTML)
    }

}
