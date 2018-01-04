import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';



@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],

})
export class FiltersComponent implements OnInit {

  // selectorDays = [
  //   'all time',
  //   'last day',
  //   '7 days ago',
  //   '30 days ago',
  //   'this month',
  //   'this quarter', 
  //   'half a year', 
  //   'this year'
  // ];

  // links = [
  //   "http://85.222.46.201:11780/dashboard/webapi/resource/message",
  //   "http://85.222.46.201:11780/dashboard/webapi/resource/message/1",
  //   "http://85.222.46.201:11780/dashboard/webapi/resource/message/6",
  //   "http://85.222.46.201:11780/dashboard/webapi/resource/message/4",
  //   "http://85.222.46.201:11780/dashboard/webapi/resource/message/2",
  //   "http://85.222.46.201:11780/dashboard/webapi/resource/message/3",
  //   "http://85.222.46.201:11780/dashboard/webapi/resource/message/9",
  //   "http://85.222.46.201:11780/dashboard/webapi/resource/message/5"
  // ];

  selector = {
    values: ['all time',
      'last day',
      '7 days ago',
      '30 days ago',
      'this month',
      'this quarter',
      'half a year',
      'this year'],
    links: [
      "http://89.67.4.242:11780/dashboard/webapi/resource/message",
      "http://89.67.4.242:11780/dashboard/webapi/resource/message/1",
      "http://89.67.4.242:11780/dashboard/webapi/resource/message/6",
      "http://89.67.4.242:11780/dashboard/webapi/resource/message/4",
      "http://89.67.4.242:11780/dashboard/webapi/resource/message/2",
      "http://89.67.4.242:11780/dashboard/webapi/resource/message/3",
      "http://89.67.4.242:11780/dashboard/webapi/resource/message/9",
      "http://89.67.4.242:11780/dashboard/webapi/resource/message/5"
    ]

  };

  button = ['get charts'];

  // selectorMonth = ['select months', 'this month', 'this quarter', 'half a year', 'this year'];

  @Output()
  linkService = new EventEmitter<String>();
  link: String = '';


  selectForm: FormGroup;
  selectorMessage = new SelectorMessage();

  constructor() {

  }

  ngOnInit() {
    this.selectForm = new FormGroup({
      days: new FormControl(this.selector.values[0]),
      //  month: new FormControl(this.selectorMonth[0]),
      // selections: new FormArray([new FormControl(null), new FormControl(null)])
    });
  }


  onSubmit() {
    console.log(this.selectForm);
    this.selectorMessage.days = this.selectForm.value.days;
    // this.selectorMessage.month = this.selectForm.value.month;
    console.log(this.selectorMessage);


    //another
    //selector opions days/months
    let days = this.selectForm.get('days').value;
    console.log(days);
    // let month = this.selectForm.get('month').value;
    // console.log(month);

    // if (days == 'last day') {
    //   this.link = this.links[1];
    // } else if (days == '7 days ago') {
    //   this.link = this.links[2];
    // } else if (days == '30 days ago') {
    //   this.link = this.links[3];
    // } else if (days == 'select days') {
    //   this.link = this.links[0];
    // } else if (days =! null || days == null) {
    //   this.link = 'error';
    // }

    // switch (days) {
    //   case this.selectorDays[0]:
    //     this.link = this.links[0];
    //     break;
    //   case this.selectorDays[1]:
    //     this.link = this.links[1];
    //     break;
    //   case this.selectorDays[2]:
    //     this.link = this.links[2];
    //     break;
    //   case this.selectorDays[3]:
    //     this.link = this.links[3];
    //     break;
    // }

    for (let i = 0; i < this.selector.links.length; i++) {
      switch (days) {
        case this.selector.values[i]:
          this.link = this.selector.links[i];
          break;
      }
    }

    this.linkService.emit(this.link);
  }


  getSelections() {
    let options: String = this.selectForm.get('days').value;
    return options;
  }

}

class SelectorMessage {
  constructor(public days?: string, public month?: string) { }
}



