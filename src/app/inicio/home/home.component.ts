import { Component } from '@angular/core';
import { DistribuidoresService } from 'src/app/services/distribuidores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  uuid: string | any

  constructor(
    public distribuidoresSrv: DistribuidoresService
  ) { }

  listaDistribuidores: any[] = []
  listaProductos: any[] = []
  childRes : any[] = []

  ngAfterViewInit() {
    this.distribuidoresSrv.listar().subscribe((x: any) => {
      console.log(x.lista)
      this.listaDistribuidores = x.lista
    })
  }

  isClicked(uuid: string) {
    this.distribuidoresSrv.informacion(uuid).subscribe((resp: any) => {
      this.listaProductos = resp.informacionP.productos
      console.log(this.listaProductos)
      this.childRes = this.listaProductos
    })

  }


  // objTarjeta = {
  //   nombre: "Product"
  // }

}
