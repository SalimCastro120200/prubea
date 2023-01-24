import { Component, Input, OnInit } from '@angular/core';

import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-cantidad-boton',
  templateUrl: './cantidad-boton.component.html',
  styleUrls: ['./cantidad-boton.component.scss']
})
export class CantidadBotonComponent implements OnInit {

  @Input() cantidad : any 
  
  constructor(public productosSrv: ProductosService) {
  }

  ngOnInit() {
    console.log(this.cantidad)
    this.cantidad = this.cantidad
  }



  counter() {
    // this.items += 1
    this.cantidad += 1
    // console.log(this.items)
  }

  minus() {
    this.cantidad -= 1
    if (this.cantidad < 0) {
      this.cantidad = 0
    }
  }

}
