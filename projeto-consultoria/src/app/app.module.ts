import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BotaoEntrarHojeComponent } from './components/botao-entrar-hoje/botao-entrar-hoje.component';
import { ServicosContainerComponent } from './components/servicos-container/servicos-container.component';
import { SubPageComponent } from './components/sub-page/sub-page.component';
import { DepoimentosComponent } from './components/depoimentos/depoimentos.component';
import { FooterComponent } from './components/footer/footer.component';

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
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
