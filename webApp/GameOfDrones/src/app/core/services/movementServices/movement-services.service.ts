import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovementServicesService {

  constructor(private http: HttpClient) { }

  getMovements(): Observable<any> {
    const headers = {
      'api_key': environment.api_key,
    };

    return this.http.get(environment.apiUrl + '/get_movements', { headers });
  }
}
