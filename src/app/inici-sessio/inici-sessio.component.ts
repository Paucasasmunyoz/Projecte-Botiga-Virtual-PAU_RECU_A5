import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-inici-sessio',
  templateUrl: './inici-sessio.component.html',
  styleUrls: ['./inici-sessio.component.css']
})
export class IniciSessioComponent implements OnInit{

  constructor() {
  }

  ngOnInit() {
    let boto_inici = document.getElementById("boton")
    //@ts-ignore
    boto_inici.onclick = function bbb(){
      let nom;
      let contrasenya;
      //@ts-ignore
      nom = document.getElementById("nom_inici").value;
      //@ts-ignore
      contrasenya = document.getElementById("pass_inici").value;

      let comprobar_nom = localStorage.getItem("nom")
      let comprobar_pass = localStorage.getItem("contrasenya")

      if ((nom==comprobar_nom)&&(contrasenya==comprobar_pass)){
        let correcte = localStorage.setItem("nombre",nom)
        alert("Correcte")
        return true;
      }
      else{
        alert("Inici de sessió incorrecte")
        return false;
      }

    }
  }
}
