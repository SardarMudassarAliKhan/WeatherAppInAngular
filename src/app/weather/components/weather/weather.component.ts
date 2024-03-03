import { Component } from '@angular/core';
import { WeatherService } from '../../service/weather.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { WeatherData } from '../../Model/WeatherData';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'] // Corrected property name
})
export class WeatherComponent {

  weatherData: WeatherData | undefined;
  cityForm!:FormGroup;;
  constructor(private weatherService: WeatherService,private formBuilder: FormBuilder,)
  {
    console.log('WeatherComponent created');
  }

  ngOnInit(): void {
    this.cityForm = this.formBuilder.group({
      city: ['', Validators.required]
    });
  }

  getWeather(): void {
    debugger;
    if (this.cityForm?.valid) {
      const city = this.cityForm.get('city')?.value;
      this.weatherService.getWeatherData(city)
      .subscribe({
        next: data => {
          debugger;
          this.weatherData = data;
          console.log(data);
        },
        error: error => {
          console.error(error);
        },
        complete: () => {
          console.log('API call completed');
        }
      });
    }
  }
}
