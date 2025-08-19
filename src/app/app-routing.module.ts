import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { LayoutComponent } from './core/layout/layout.component';
import { HomeComponent } from './core/home/home.component';
 
const routes: Routes = [
  {
    path: '',
    title: 'Touriste - Accueil',
    component: LayoutComponent, // Layout with header/footer
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full',
      },
 
 
    ],
  },
   
 

 
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
