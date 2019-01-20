import { Component, OnInit } from '@angular/core';
import {WheelService} from '../service/wheel.service';
import {Car} from '../Model/Car';
import {CarService} from '../service/car.service';

@Component({
  selector: 'app-automatic',
  templateUrl: './automatic.component.html',
  styleUrls: ['./automatic.component.css']
})
export class AutomaticComponent implements OnInit {

  allCars: Car[] = [];

  constructor(private wheelService: WheelService, private carService: CarService) { }

  ngOnInit() {
    this.populateCars();
  }

  populateCars(): void {
    this.carService.getAllCars().subscribe((cars: any[]) => this.allCars = cars, (error) => console.log(error));
  }

}
