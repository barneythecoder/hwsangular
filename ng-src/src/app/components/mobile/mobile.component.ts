import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (<any>window).ga('send', 'event', {
      eventCategory: 'Page View',
      eventLabel: 'Mobile Visit',
      eventAction: 'User redirected to mobile landing',
      eventValue: 10
    });
  }

}
