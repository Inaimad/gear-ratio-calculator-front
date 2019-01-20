import { Component, OnInit } from '@angular/core';
import { ResultService } from '../service/result.service';
import { Result } from '../Model/Result';
import {SpeedPerGearMap} from '../Model/SpeedPerGearMap';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  result: Result;
  speedPerGearMap: SpeedPerGearMap;

  constructor(private resultService: ResultService) {
  }

  ngOnInit() {
    this.speedPerGearMap = new SpeedPerGearMap();
    this.setEmptyResultSpeedMap();
    this.result = new Result();
    this.result.speedPerGearMap = this.speedPerGearMap;
  }

  getResult() {
    this.resultService.getResultByCarId(1).subscribe((result: Result) => this.result = result, (error) => console.log(error));
  }

  setEmptyResultSpeedMap() {
    this.speedPerGearMap.First = '';
    this.speedPerGearMap.Second = '';
    this.speedPerGearMap.Third = '';
    this.speedPerGearMap.Fourth = '';
    this.speedPerGearMap.Fifth = '';
    this.speedPerGearMap.Sixth = '';
  }

}
