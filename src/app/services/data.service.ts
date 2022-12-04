import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { arrPayments } from '../data/arrPayments';
import {PayDay, Payment} from "../interfaces/paymentInterface";



@Injectable()
export class DataService {
arrPayments$ = new BehaviorSubject(arrPayments)

public getData () {
  return this.arrPayments$.asObservable()
}

public setData () {
  this.arrPayments$.next(this.arrPayments$.value)
}

public setPayDay ( val: PayDay) {
  this.arrPayments$.value.push(val)
  this.arrPayments$.next(this.arrPayments$.value)
  // this.arrPayments$.next([...this.arrPayments$.value].push(val))
}

  public setPayment ( day: PayDay, pay: Payment ){
 day.payments.push(pay)
    // this.arrPayments$.next([...this.arrPayments$.value])
  }






  getRussianDate(date: Date | string) {
    const gotDate = new Date(date)
    const DateDays: number = gotDate.getDate();
    const DateMonth: number = gotDate.getMonth() + 1;
    const DateYear: number = gotDate.getFullYear();
    return DateDays.toString() + '-' + DateMonth.toString() + '-' + DateYear.toString()
  }


  constructor() { }
}

// export interface Payment {
//   value: number,
//   comment?: string,
//   date: Date
//
// }
//
//
// export interface PayDay {
//   date: Date,
//   payments: Payment[]
// }
