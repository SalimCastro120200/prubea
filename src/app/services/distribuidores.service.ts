import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistribuidoresService {

  constructor(
    private req: RequestService
  ) { }

  listar() : Observable<any> {
    return this.req.get( environment.http.distribuidor.listar )
  }

  informacion( uuid: string ) : Observable<any> {
    return this.req.get( environment.http.distribuidor.informacion.replace("#uuid#", uuid) )
  }
  
}
