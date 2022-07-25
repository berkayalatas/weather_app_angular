import { Component, OnInit } from '@angular/core';
import { WeatherData } from './modules/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  location: string = 'Dortmund'
  title = 'weather';

  constructor(private weatherService: WeatherService) { }

  weatherData?: WeatherData;

  ngOnInit():void {
    this.getWeatherData(this.location)
  }

  onSubmit(){
    this.getWeatherData(this.location);
    this.location = '';
  }

  private getWeatherData(location:string){
    this.weatherService.getWeatherData(this.location).subscribe({
      next: (response) => {
        this.weatherData = response
        console.log(response);
      }, error: (err: any) => {
        console.log(err);
      }
    })
  }
}
