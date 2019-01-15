import { Component, OnInit } from '@angular/core';
import { ResultService } from '../service/result.service';
import { Result } from '../Model/Result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  result: Result;

  constructor(private resultService: ResultService) { }

  ngOnInit() {
    this.getResult();
  }

  getResult(): void {
    this.resultService.getResult().subscribe(result => this.result = result);
  }

}
