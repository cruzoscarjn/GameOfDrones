import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreServicesService {

  constructor( private http: HttpClient) { }

  postScore(body): Observable<any> {
    const headers = {
      'api_key': environment.api_key,
    };

    return this.http.post(environment.apiUrl + '/insert_scores', body, { headers });
  }

  getScores(name, page): Observable<any> {
    const headers = {
      'api_key': environment.api_key,
    };
    const params = {
      'page': page,
      'page_size': '10',
      'player_name': name,
    };
    return this.http.get(environment.apiUrl + '/get_scores', { headers, params });
  }
}
