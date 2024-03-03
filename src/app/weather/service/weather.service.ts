import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { WeatherData } from '../Model/WeatherData';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getWeatherData(city:string) : Observable<WeatherData>{
    debugger;
    return this.http.get<WeatherData>(this.apiUrl + "city=" + city);
  }
}
