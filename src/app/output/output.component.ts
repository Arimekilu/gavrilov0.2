import {Component, Input, OnInit} from '@angular/core';
import {transaction} from "../app.component";
import { DataService } from '../data.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})

@Input()

export class OutputComponent implements OnInit {

  arrPay = this.dataService.getData()

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

}
