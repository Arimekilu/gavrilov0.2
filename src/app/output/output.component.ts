import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {map} from 'rxjs';
import {Payment} from '../interfaces/paymentInterface';
import {DataService} from '../services/data.service';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
@Input()
export class OutputComponent implements OnInit {
  dateForm: FormGroup;

  arrPay = this.dataService.getData()

  logDate() {


  }



  // public calculateDate (d1: Date, d2: Date) {
  //   const d1Days: number = d1.getDay();
  //   const d1Month: number = d1.getMonth();
  //   const d1Year: number = d1.getFullYear();
  //
  //   const d2Days: number = d2.getDay();
  //   const d2Month: number = d2.getMonth();
  //   const d2Year: number = d2.getFullYear();
  //
  //   return d1Days === d2Days && d1Month === d2Month && d1Year === d2Year;
  // }

  public getPayDaySum(Payment: Payment[]) {
    return Payment.reduce((sum, current) => sum + current.value, 0)
  }

  constructor(public dataService: DataService) {
    this.dateForm = new FormGroup({
      date: new FormControl(new Date(), Validators.required),
    });
  }

  ngOnInit() {
  }


}
