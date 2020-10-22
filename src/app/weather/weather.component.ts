import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ApixuService } from '../_services/apixu.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.less']
})
export class WeatherComponent implements OnInit {
  
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  public farenTemp: any;
  public farenFeels: any;
  // public value: number;
  // public result: number;

  //New code
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });

  // WeatherData:any;
  constructor(
    private fb: FormBuilder,
    private apixuService: ApixuService
    ) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.fb.group({location: ['']});
  }

  sendToAPIXU(formValues){
    this.apixuService
    .getWeather(formValues.location)
    .subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);

      this.farenTemp = this.convertToFaren(this.weatherData.current.temperature);
      this.farenFeels = this.convertToFaren(this.weatherData.current.feelslike);
    });
    
  }
  convertToFaren(celcius){
    return Math.round(celcius*(9/5)+32);
  }

  // convert(){
  //   this.result = this.value * 9.0 / 5.0 + 32;
  // }

  // getWeatherData(){
  //   let data = JSON.parse('{"request":{"type":"City","query":"New York, United States of America","language":"en","unit":"m"},"location":{"name":"New York","country":"United States of America","region":"New York","lat":"40.714","lon":"-74.006","timezone_id":"America\/New_York","localtime":"2020-09-28 10:49","localtime_epoch":1601290140,"utc_offset":"-4.0"},"current":{"observation_time":"02:49 PM","temperature":22,"weather_code":116,"weather_icons":["https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0002_sunny_intervals.png"],"weather_descriptions":["Partly cloudy"],"wind_speed":0,"wind_degree":0,"wind_dir":"N","pressure":1015,"precip":0.3,"humidity":84,"cloudcover":75,"feelslike":25,"uv_index":5,"visibility":16,"is_day":"yes"}}')
  //   this.setWeatherData(data);
  // }

  // setWeatherData(data){
  //   this.WeatherData = data;
  //   let localTime = new Date(this.WeatherData.location.localtime);
  //   this.WeatherData.local_time = localTime.toLocaleTimeString();
  //   this.WeatherData.temp_feels_like = (this.WeatherData.cu)
  // }
}
