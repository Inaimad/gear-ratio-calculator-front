import { Component, OnInit } from '@angular/core';
import {Wheel} from '../Model/Wheel';
import {WheelService} from '../service/wheel.service';

@Component({
  selector: 'app-automatic',
  templateUrl: './automatic.component.html',
  styleUrls: ['./automatic.component.css']
})
export class AutomaticComponent implements OnInit {

  allWheels: Wheel[] = [];

  constructor(private wheelService: WheelService) { }

  ngOnInit() {
    this.populateWheels();
  }

  populateWheels(): void {
    this.wheelService.getAllWheels().subscribe((wheels: any[]) => this.allWheels = wheels, (error) => console.log(error));
  }

}
