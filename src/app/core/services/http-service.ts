import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: environment.authorization
  })
};

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  get<T>(endpoint: string, params: string = ''): Observable<any> {
    return this.http.get<T>(environment.api + endpoint + params, httpOptions);
  }
}
