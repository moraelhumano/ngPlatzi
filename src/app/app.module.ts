import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AgmCoreModule } from '@agm/core';
import {ResaltarDirective} from "./directives/resaltar.directive";
import {ContarClicksDirective} from "./directives/contar-clicks.directive";
import {Routes, RouterModule} from "@angular/router";

import {DetallesComponent} from "./detallesComponent/detalles.component";
import {LugaresComponent} from "./lugaresComponent/lugares.component";
import {ContactoComponent} from "./contactoComponent/contacto.component";
import {CrearComponent} from "./crearComponent/crear.component";

import {LugaresService} from "./services/lugares.service";

import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


export const firebaseConfig = {
  apiKey: "AIzaSyDVIyfZgn_3OTaKt7vBYIo4sO85l-6v2_M",
    authDomain: "ngtest-5067b.firebaseapp.com",
    databaseURL: "https://ngtest-5067b.firebaseio.com",
    storageBucket: "ngtest-5067b.appspot.com",
    messagingSenderId: "798556389049"
}

const appRoutes: Routes = [
 {path:'', component: LugaresComponent},
 {path: 'lugares', component: LugaresComponent},
 {path: 'detalles/:id', component: DetallesComponent},
 {path: 'contacto', component: ContactoComponent},
 {path: 'crear', component: CrearComponent}
];

@NgModule({
  declarations: [
    AppComponent,
      ResaltarDirective,
      ContarClicksDirective,
      DetallesComponent,
      LugaresComponent,
      ContactoComponent,
      CrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule,
    AngularFireDatabaseModule,
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
