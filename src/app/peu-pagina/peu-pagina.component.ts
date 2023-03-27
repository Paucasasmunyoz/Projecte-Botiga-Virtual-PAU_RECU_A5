import { Component } from '@angular/core';

@Component({
  selector: 'app-peu-pagina',
  templateUrl: './peu-pagina.component.html',
  styleUrls: ['./peu-pagina.component.css']
})
export class PeuPaginaComponent {

  imatges: any[];

  constructor() {

    const images={
      pagos: "http://localhost:3080/imatges/pagos",
      pagos2: "http://localhost:3080/imatges/pagos2",
      pagos3: "http://localhost:3080/imatges/pagos3",
      pagos4:"http://localhost:3080/imatges/pagos4",
    }

    this.imatges=[];
    this.imatges.push(images)
  }

}
