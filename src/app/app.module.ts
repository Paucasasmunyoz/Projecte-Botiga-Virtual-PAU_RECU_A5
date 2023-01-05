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
    NavegacioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
