import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';

const routes : Routes = [
  {
    path: 'card',
    component: CardComponent
  },{
    path: 'slider',
    component: SliderComponent
  },{
    path: 'home',
    component: HomeComponent
  },{
  path: '**', redirectTo: 'home' 
  }

]

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
