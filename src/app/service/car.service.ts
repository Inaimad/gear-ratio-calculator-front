import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: Http) { }

  getAllCars() {
    return this.http.get('http://localhost:8080/api/car/getAllCars').pipe(map(
      (response: Response) => {
        const data = response.json();
        console.log('Cars retrieved from back end');
        return data;
      }
    ));
  }
}
