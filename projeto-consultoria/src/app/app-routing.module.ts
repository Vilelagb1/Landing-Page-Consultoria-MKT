import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepoimentosComponent } from './components/depoimentos/depoimentos.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';


 export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'depoimentos',
    component: DepoimentosComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
