import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CistellaComponent } from './cistella/cistella.component';
import { CatalegComponent } from './cataleg/cataleg.component';
import { PeuPaginaComponent } from './peu-pagina/peu-pagina.component';
import { FormulariComponent } from './formulari/formulari.component';
import { CondicionsComponent } from './condicions/condicions.component';
import { ContacteComponent } from './contacte/contacte.component';
import { PlanaPrincipalComponent } from './plana-principal/plana-principal.component';
import { NavegacioComponent } from './navegacio/navegacio.component';
import { AppRoutingModule } from './app-routing.module';
import { IniciSessioComponent } from './inici-sessio/inici-sessio.component';
import { RobaComponent } from './roba/roba.component';
import { AccesorisComponent } from './accesoris/accesoris.component';
import { SuplementsComponent } from './suplements/suplements.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { DadesUserComponent } from './dades-user/dades-user.component';
import { NgbCarousel, NgbRating } from "@ng-bootstrap/ng-bootstrap";
import { DatePipe } from "@angular/common";
import { initializeApp, FirebaseOptions } from 'firebase/app';
import { environment } from '../environment';
import { CambiarContrasenyaComponent } from './cambiar-contrasenya/cambiar-contrasenya.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CistellaComponent,
    CatalegComponent,
    PeuPaginaComponent,
    FormulariComponent,
    CondicionsComponent,
    ContacteComponent,
    PlanaPrincipalComponent,
    NavegacioComponent,
    IniciSessioComponent,
    RobaComponent,
    AccesorisComponent,
    SuplementsComponent,
    DadesUserComponent,
    CambiarContrasenyaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbRating,
    NgbCarousel,
  ],
  providers: [
    DatePipe,
    { provide: 'FirebaseApp', useFactory: () => initializeApp(environment.firebaseConfig) },
    { provide: 'AppName', useFactory: () => initializeApp(environment.firebaseConfig).name },
    { provide: 'AppOptions', useFactory: () => initializeApp(environment.firebaseConfig).options as FirebaseOptions }
  ],
  exports: [
    NavegacioComponent,
    MenuComponent,
    PeuPaginaComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
