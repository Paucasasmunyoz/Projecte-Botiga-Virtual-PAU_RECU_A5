import { Component } from '@angular/core';
import {ServeiService} from "../servei.service";

@Component({
  selector: 'app-suplements',
  templateUrl: './suplements.component.html',
  styleUrls: ['./suplements.component.css']
})
export class SuplementsComponent {

  imatges: any[];
  prova:any;


  constructor(private s: ServeiService) {
    const images={
      creatina: "http://localhost:3080/imatges/creatinas",
      proteina: "http://localhost:3080/imatges/proteinaaa",
      barretes: "http://localhost:3080/imatges/barrita",
    }

    this.imatges=[];
    this.imatges.push(images)
  }

  ngOnInit() {
  }



}
