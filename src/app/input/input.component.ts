import { NgStyle } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { transaction } from '../app.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {  

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
    this.dataService.setData(this.myForm.value)
    
    this.myForm.reset();
  }

  

  ngOnInit(): void {}

  ngDoCheck() {
    
  }
}
