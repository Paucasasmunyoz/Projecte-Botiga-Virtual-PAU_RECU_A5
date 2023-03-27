import {Component, OnInit} from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {NgIf} from "@angular/common";
import {AppModule} from "../app.module";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-plana-principal',
  templateUrl: './plana-principal.component.html',
  styleUrls: ['./plana-principal.component.css'],

})
export class PlanaPrincipalComponent implements OnInit{
  imatges2: any;

constructor(private http: HttpClient) {
  const imatges2={
    principal: "http://localhost:3080/imatges/prin",
    lproteina: "http://localhost:3080/imatges/lproteina",
    lcreatina: "http://localhost:3080/imatges/lcreatina",
    lropa: "http://localhost:3080/imatges/lropa",
    lvitaminas: "http://localhost:3080/imatges/lvitaminas",
  }

  this.imatges2=[];
  this.imatges2.push(imatges2)
}

  ngOnInit(): void {
  }

}
