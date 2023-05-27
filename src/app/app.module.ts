import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgIf} from '@angular/common'
import { MaterialModule } from './utils/material/material.module';
import { CalculadoraComponent } from './dominio/calculadora/calculadora.component';
import { ConsultaApiService } from './services/consulta-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgIf,
    MaterialModule,
  ],
  providers: [ConsultaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
