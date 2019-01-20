import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {Http, Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: Http) { }

  getResultByCarId(carId: number) {
    return this.http.get('http://localhost:8080/api/car/calculateSpeed/carId?carId=' + carId).pipe(map(
      (response: Response) => {
        const data = response.json();
        console.log('Calculation received from Back End \n' + response);
        return data;
      }
    ));
  }
}
