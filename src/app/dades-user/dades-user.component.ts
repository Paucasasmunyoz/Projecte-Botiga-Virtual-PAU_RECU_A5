import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dades-user',
  templateUrl: './dades-user.component.html',
  styleUrls: ['./dades-user.component.css']
})
export class DadesUserComponent implements OnInit {
  usuario: any = {};
  editarModo = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario(): void {
    const email = 'pau.casas10@gmail.com'; // USUARI LOGEJAT
    this.http.get<any>('http://localhost:3080/usuario/' + email)
      .subscribe(data => {
        this.usuario = data;
      });
  }

  editarUsuario(): void {
    this.editarModo = true;
  }

  guardarCambios(): void {
    const email = 'pau.casas10@gmail.com'; // USUARI LOGEJAT
    this.http.put<any>('http://localhost:3080/usuarios/' + email, this.usuario)
      .subscribe(() => {
        this.editarModo = false;
        this.obtenerUsuario();
      });
  }

  cancelarEdicion(): void {
    this.editarModo = false;
  }
}
