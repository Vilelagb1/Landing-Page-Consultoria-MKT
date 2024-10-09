import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BotaoEntrarHojeComponent } from './components/botao-entrar-hoje/botao-entrar-hoje.component';
import { ServicosContainerComponent } from './components/servicos-container/servicos-container.component';
import { SubPageComponent } from './components/sub-page/sub-page.component';
import { DepoimentosComponent } from './components/depoimentos/depoimentos.component';
import { FooterComponent } from './components/footer/footer.component';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatCardModule} from '@angular/material/card';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BotaoEntrarHojeComponent,
    ServicosContainerComponent,
    SubPageComponent,
    DepoimentosComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,

    
    
  ],
  providers: [
    provideClientHydration(),
    provideRouter(routes),
    provideAnimationsAsync()
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class CardFancyExample {}
