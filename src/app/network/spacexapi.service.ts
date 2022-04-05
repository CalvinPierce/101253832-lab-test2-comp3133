import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {
  constructor(private http: HttpClient) { }
  
  getMissions() {
  	return this.http.get('https://api.spacexdata.com/v3/launches');

  }
}
