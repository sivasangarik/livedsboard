import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
private powerSubject = new BehaviorSubject<number[]>([]);
    private factorSubject = new BehaviorSubject<number[]>([]);
  constructor() { 
      // Generate random data every 2 seconds
      interval(2000).subscribe(() => {
        const powerData = Array.from({ length: 10 }, () =>
          Math.random() * 100
        );
        this.powerSubject.next(powerData);
  
        const factorData = Array.from({ length: 10 }, () => Math.random());
        this.factorSubject.next(factorData);
      });
    }

    getPowerData(): Observable<number[]> {
      return this.powerSubject.asObservable();
    }
  
  
    
    
    getFactorData(): Observable<number[]> {
      return this.factorSubject.asObservable();
    }
  }

