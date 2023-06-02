import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cambiar-contrasenya',
  templateUrl: './cambiar-contrasenya.component.html',
  styleUrls: ['./cambiar-contrasenya.component.css']
})
export class CambiarContrasenyaComponent {
  correo: string = '';
  nuevaContrasenya: string = '';

  constructor(private http: HttpClient) {
  }

  enviarCorreo(): void {
    // Verificar si el correo existe en la base de datos
    this.http.get<boolean>('http://localhost:3080/email?email=' + this.correo).subscribe(existe => {
      if (existe) {
        // Enviar correo electrónico con enlace para cambiar la contraseña
        this.http.post('http://localhost:3080/api/sendemail', {name: '', email: this.correo}).subscribe(() => {
          console.log('Correo electrónico enviado');
          // Redirigir a la página de confirmación o mostrar un mensaje de éxito
        });
      } else {
        console.log('El correo no existe en la base de datos');
        // Mostrar un mensaje de error o realizar alguna acción adicional
      }
    });
  }

  cambiarContrasenya(): void {
    this.http.post('http://localhost:3080/api/contrasenya', {
      email: this.correo,
      contra: this.nuevaContrasenya
    }).subscribe(() => {
      console.log('Contraseña cambiada');
      // Redirigir a la página de confirmación o mostrar un mensaje de éxito
    });
  }
}
