import { CantidadBotonComponent } from './cantidad-boton/cantidad-boton.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { NgModule } from '@angular/core';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    CardComponent,
    SliderComponent,
    HomeComponent,
    CantidadBotonComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    InicioRoutingModule,
    MatRadioModule,
    
  ]
})
export class InicioModule { }
