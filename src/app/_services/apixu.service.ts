import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=e670d667a83266b3f3327e25e4e156ca&query=' + location
    );
  }
}
