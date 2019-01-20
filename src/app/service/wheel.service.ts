import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WheelService {

  constructor(private http: Http) { }

  getAllWheels() {
    return this.http.get('http://localhost:8080/api/wheel/getAll').pipe(map(
      (response: Response) => {
        const data = response.json();
        console.log('Wheels retrieved from back end');
        return data;
      }
    ));
  }
}
