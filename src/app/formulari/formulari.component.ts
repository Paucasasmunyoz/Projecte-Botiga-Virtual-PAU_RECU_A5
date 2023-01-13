import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-formulari',
  templateUrl: './formulari.component.html',
  styleUrls: ['./formulari.component.css']
})
export class FormulariComponent implements OnInit{

  constructor(private router: Router) {
  }

  ngOnInit() {
    let boto_registre = document.getElementById("boton")
    //@ts-ignore
    boto_registre.onclick = function aaa(){

    }
  }


  valorLogIn($myParam: string = ''): void{
    const nav: string[] = ['/login']
    if($myParam.length) {
      nav.push($myParam);
    }
    this.router.navigate(nav)


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



