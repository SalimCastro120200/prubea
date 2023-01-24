import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private req: RequestService
  ) { }

  listar( uuid: string ): Observable<any> {
    return this.req.get(environment.http.distribuidor.listar.replace("#uuid#",uuid) )
  }
}
