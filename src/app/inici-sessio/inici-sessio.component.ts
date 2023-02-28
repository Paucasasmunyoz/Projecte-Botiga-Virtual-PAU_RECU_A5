import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inici-sessio',
  templateUrl: './inici-sessio.component.html',
  styleUrls: ['./inici-sessio.component.css']
})
export class IniciSessioComponent implements OnInit{
  emailLog: string='';
  passLog: string='';

  constructor( private router: Router, private http: HttpClient) {

  }

  ngOnInit() {
  }


  login($myParam: string = ''): void{
    const nav: string[] = ['']
    if($myParam.length) {
      nav.push($myParam);
    }
    this.router.navigate(nav)

    // let nom;
    // let contrasenya;
    // //@ts-ignore
    // nom = document.getElementById("nom_inici").value;
    // //@ts-ignore
    // contrasenya = document.getElementById("pass_inici").value;
    //
    // let comprobar_nom = localStorage.getItem("nom")
    // let comprobar_pass = localStorage.getItem("contrasenya")
    //
    // if ((nom==comprobar_nom)&&(contrasenya==comprobar_pass)){
    //   let correcte = localStorage.setItem("nombre",nom)
    //   window.location.reload();
    //   alert("Correcte")
    //
    // }
    // else{
    //   alert("Inici de sessió incorrecte")
    // }

    var resultat: Object =false;
    var username:any;
    let req = new HttpParams().set('email',this.emailLog);
    let req2 = new HttpParams().set('passw',this.passLog);
    this.http.get("http://172.16.6.1:3080/email", {params: req}).subscribe((client)=>{
      resultat=client;
      if(resultat==true){
        this.http.get("http://172.16.6.1:3080/pass", {params: req2}).subscribe((client)=> {
          resultat = client;
          if(resultat == true){
            alert("Inici de sessió correcte")
            alert("Iniciat el usuari amb l'"+req)

          }
          else{
            alert("Contrasenya incorrecte")}
        })
      }else{
        alert("Email incorrece")}
    });


  }
}
