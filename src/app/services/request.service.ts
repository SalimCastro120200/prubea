import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient
  ) { }

  get( path: string, query: string = '', objHeaders: any = null ) : Observable<any> {
    let headers = new HttpHeaders( objHeaders )
    return this.http.get( `${environment.http.server}${path}${query}`, {headers} );
  }

}
