import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DistribuidoresService } from 'src/app/services/distribuidores.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  uuid: string | any

  @Input() childRes: any[] = []
  constructor(
    public distribuidoresSrv: DistribuidoresService
    ) {}

  i: number = 0
  @ViewChild('main') main!: ElementRef;
  widthSize: number = 0
  tarjetas: any
  lastCard: any

  ngAfterViewInit() {
    this.widthSize = this.main.nativeElement.firstChild.firstChild.offsetWidth;
    this.tarjetas = this.main.nativeElement.getElementsByTagName("app-card").length * this.widthSize;
    
  }
  
  prevPage() {
    this.i += this.widthSize;
    if (this.i > 0) {
      this.i = 0
    }
  }

  nextPage() {
    this.i -= this.widthSize;
    this.lastCard = -this.main.nativeElement.scrollWidth
    if (this.lastCard > this.i) {
      this.i = 0
    }
  }

}
