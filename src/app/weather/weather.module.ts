import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './components/weather/weather.component';
import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  { path: 'weatherdata', component: WeatherComponent }
];


@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  exports:
  [
    WeatherComponent
  ]
})
export class WeatherModule { }
