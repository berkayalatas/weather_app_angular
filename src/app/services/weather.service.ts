import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../modules/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  [x: string]: any;
  url = 'https://community-open-weather-map.p.rapidapi.com/weather'
 
  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(environment.APIHostHeaderName, environment.APIHostHeaderValue)
        .set(environment.APIKeyHeaderName, environment.APIKeyHeaderValue),
      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json')
    });
  }
}
