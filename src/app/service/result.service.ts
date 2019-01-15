import { Injectable } from '@angular/core';
import { Result } from '../Model/Result';
import {MOCKED_RESULT} from '../Mocks/mocked-result';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  result: Result;

  constructor() { }

  getResult() {
    return of(MOCKED_RESULT);
  }
}
