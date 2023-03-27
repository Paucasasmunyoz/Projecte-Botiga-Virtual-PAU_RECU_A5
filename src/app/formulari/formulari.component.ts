import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-formulari',
  templateUrl: './formulari.component.html',
  styleUrls: ['./formulari.component.css']
})
export class FormulariComponent implements OnInit{
  nom: string='';
  cognom: string='';
  telefon: string='';
  email: string='';
  passw: string='';

  constructor(private router: Router, private http: HttpClient) {

  }

  ngOnInit() {

  }


  valorLogIn($myParam: string = ''): void{
    const nav: string[] = ['/login']
    if($myParam.length) {
      nav.push($myParam);
    }
    this.router.navigate(nav)

    // let nom;
    // let contrasenya;
    // //@ts-ignore
    // nom = document.getElementById("email").value;
    // //@ts-ignore
    // contrasenya = document.getElementById("pass").value;
    //
    // localStorage.setItem("nom",nom);
    // localStorage.setItem("contrasenya",contrasenya);

    this.http.put<any>("http://localhost:3080/registre" , {nom: this.nom, cognom: this.cognom, telefon: this.telefon, email: this.email, passw:this.passw}).subscribe();

  }


}



