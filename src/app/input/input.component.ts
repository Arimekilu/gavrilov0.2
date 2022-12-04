import {NgStyle} from '@angular/common';
import {Component, OnInit, Output} from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject, map, Observable, pipe, Subscription} from 'rxjs';
import {DataService} from '../services/data.service';
import {arrPayments} from "../data/arrPayments";
import {PayDay, Payment} from "../interfaces/paymentInterface";


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  arrPaydays$: Observable<PayDay[]> = this.dataService.getData()

  myForm: FormGroup;

  constructor(public dataService: DataService) {
    this.myForm = new FormGroup({
      value: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      comment: new FormControl(),
      date: new FormControl(new Date(), Validators.required),
    });
  }

  submit() {
    // this.dataService.setPayDay(this.getPayDay())
    console.log(!!this.foundedPayDay())
    console.log(this.foundedPayDay())
    if (!!this.foundedPayDay()) {
      // @ts-ignore
      this.dataService.setPayment(this.foundedPayDay(), (this.getPayment()))
    } else {
      this.dataService.setPayDay(this.getPayDay())
    }

    // let payDay: PayDay = this.getPayDay()
    // payDay.payments.push()

    this.myForm.reset();
  }

  log() {
    console.log(this.foundedPayDay())
  }

  getPayDay() {
    return <PayDay>{
      date: this.myForm.value.date,
      payments: [{
        value: this.myForm.value.type === '+' ? this.myForm.value.value : -this.myForm.value.value,
        comment: this.myForm.value.comment,
        date: new Date(this.myForm.value.date)
      }]
    }
  }

  getPayment() {
    return <Payment>{
      value: this.myForm.value.type === '+' ? this.myForm.value.value : -this.myForm.value.value,
      comment: this.myForm.value.comment,
      date: new Date(this.myForm.value.date)
    }
  }

//   foundedPayDay(): PayDay => {
//
// }


  foundedPayDay() {
    let payDay
    this.arrPaydays$.pipe(
      map(value => {
        return value.find(res => this.dataService.getRussianDate(res.date) === this.dataService.getRussianDate(this.myForm.value.date))
      })
    ).subscribe(val => {
      payDay = val
    })
    return payDay
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
  }
}
