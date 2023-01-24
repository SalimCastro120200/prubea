import { Component, Input, OnInit } from '@angular/core';

import { DatePipe } from '@angular/common';
import { ProductosService } from 'src/app/services/productos.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() producto : any 
  
  constructor(public productosSrv: ProductosService) {
  }
  
  changedDate : any
  activo = false
  cantidad : any
  
  marcarFavorito(nEstatus: boolean) {
    this.activo = nEstatus;
    // enviar peticion
  }
  
  _second = 1000;
  _minute = this._second * 60;
  _hour = this._minute * 60;
  _day = this._hour * 24;
  end: any;
  now: any;
  day: any;
  hours: any;
  minutes: any;
  seconds: any;
  source = timer(0, 1000);
  clock: any;
  pipe = new DatePipe('en-US');

  ngOnInit() {

    this.clock = this.source.subscribe(t => {
      this.now = new Date();
      let ChangeFormat = this.pipe.transform(this.producto.fechaLimPromocion, 'yyyy-MM-dd');
      this.changedDate = ChangeFormat;
      // this.end = this.producto.fechaLimPromocion;
      // console.log(this.now);
      // console.log(this.changedDate);
      this.showDate();
    });

    this.cantidad = this.producto.cantidad
  } 

 
  showDate() {
    let distance = this.end - this.now;
    // console.log(distance);
    this.day = Math.floor(distance / this._day);
    this.hours = ('0' + Math.floor((distance % this._day) / this._hour)).slice(-2);
    this.minutes = ('0' + Math.floor((distance % this._hour) / this._minute)).slice(-2);
    this.seconds = ('0' + Math.floor((distance % this._minute) / this._second)).slice(-2);
  }


}


