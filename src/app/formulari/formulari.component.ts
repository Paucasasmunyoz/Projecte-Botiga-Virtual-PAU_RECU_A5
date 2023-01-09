import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-formulari',
  templateUrl: './formulari.component.html',
  styleUrls: ['./formulari.component.css']
})
export class FormulariComponent implements OnInit{

  constructor() {
  }

  ngOnInit() {
    let boto_registre = document.getElementById("boton")
    //@ts-ignore
    boto_registre.onclick = function aaa(){
      let nom;
      let contrasenya;
      //@ts-ignore
      nom = document.getElementById("nomm").value;
      //@ts-ignore
      contrasenya = document.getElementById("pass").value;

      localStorage.setItem("nom",nom);
      localStorage.setItem("contrasenya",contrasenya);
    }
  }

}



