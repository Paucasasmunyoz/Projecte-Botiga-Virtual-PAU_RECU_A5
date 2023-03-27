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



    var resultat: Object =false;
    var username:any;
    let req = new HttpParams().set('email',this.emailLog);
    let req2 = new HttpParams().set('passw',this.passLog);
    this.http.get("http://localhost:3080/email", {params: req}).subscribe((client)=>{
      resultat=client;
      if(resultat==true){
        this.http.get("http://localhost:3080/pass", {params: req2}).subscribe((client)=> {
          resultat = client;
          if(resultat == true){
            alert("Inici de sessió correcte")
            alert("Iniciat el usuari amb l'"+req)


            // let nom;
            //
            // // @ts-ignore
            // nom = document.getElementById("emailinici").value;
            // localStorage.getItem("nom");
            // let correctee = localStorage.setItem("nom",nom)
            //
            // window.location.reload();
            //
            // console.log("Prova")
            // console.log(nom)

            const data = new Date()
            const formatdata = data.toDateString() + " hora: " +data.getHours() + ":" + data.getMinutes()
            const text ={
              text: `/ Data: ${formatdata} Usuari: Acció: Inici de sessió correcte`
            }
            this.http.post<any>("http://localhost:3080/log/inici/sessioCorrecte", text).subscribe();
          }
          else{
            alert("Contrasenya incorrecte")}
        })
      }else{

        alert("Email incorrece")}
    });
  }
}
