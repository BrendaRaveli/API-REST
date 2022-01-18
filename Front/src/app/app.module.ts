import { ContaAppComponent } from './conta/conta.app.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacaoModule } from './Navegacao/navegacao.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacaoModule,
    NgbModule,
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
