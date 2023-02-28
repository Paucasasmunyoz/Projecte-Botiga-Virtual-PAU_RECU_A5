import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  mostrar: any;
  constructor() {

  }

  ngOnInit() {
      this.mostrar = localStorage.getItem("nom_inici")

    //@ts-ignore
    logout.onclick = function clear(){
      window.localStorage.clear()
      window.location.reload();
    }
  }
}
