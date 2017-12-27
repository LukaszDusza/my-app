import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';



@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],

})
export class FiltersComponent implements OnInit {

  selectorDays = ['select days', 'last day', '7 days ago', '30 days ago'];
  selectorMonth = ['select months', 'this month', 'this quarter', 'half a year', 'this year'];
  button = ['get charts'];

  @Output()
  linkService = new EventEmitter<String>();
  link: String = '';

  links = [
    "http://85.222.46.201:11780/dashboard/webapi/resource/message",
    "http://85.222.46.201:11780/dashboard/webapi/resource/message/1",
    "http://85.222.46.201:11780/dashboard/webapi/resource/message/6",
    "http://85.222.46.201:11780/dashboard/webapi/resource/message/7"
  ];

  selectForm: FormGroup;
  selectorMessage = new SelectorMessage();

  constructor() {

  }

  ngOnInit() {
    this.selectForm = new FormGroup({
      days: new FormControl(this.selectorDays[0]),
      month: new FormControl(this.selectorMonth[0]),
      // selections: new FormArray([new FormControl(null), new FormControl(null)])
    });
  }


  onSubmit() {
    console.log(this.selectForm);
    this.selectorMessage.days = this.selectForm.value.days;
    this.selectorMessage.month = this.selectForm.value.month;
    console.log(this.selectorMessage);


    //another
    let days = this.selectForm.get('days').value;
    console.log(days);
    let month = this.selectForm.get('month').value;
    console.log(month);

    if (days == 'last day') {
      this.link = this.links[1];
    } else if (days == '7 days ago') {
      this.link = this.links[2];
    } else if (days == '30 days ago') {
      this.link = this.links[3];
    } else if (days == 'select days') {
      this.link = this.links[0];
    } else if (days =! null || days == null){
      this.link = 'error';
    }

      this.linkService.emit(this.link);
  }


  getSelections() {
    let days: String = this.selectForm.get('days').value;
    return days;
  }

}

class SelectorMessage {
  constructor(public days?: string, public month?: string) { }
}



