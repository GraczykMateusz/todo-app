import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DaysService {


  getCurrentDay() {
    return new Date();
  }
}
