import { Injectable } from '@angular/core';
import { Barcode } from './barcode';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
    constructor(private http: HttpClient) { }

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Cosmos-Token': 'YOUR-KEY'
      })
    }
    
    getMedication(barcode): Observable<Barcode>  { 
      const _url = 'https://api.cosmos.bluesoft.com.br/gtins/'+barcode;
      return this.http.get<Barcode>(_url, this.httpOptions);
    }
}