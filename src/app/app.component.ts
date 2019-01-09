import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    $(document).ready(function () {

      $('.dropdown-trigger').dropdown({
        hover: true,
        constrainWidth: true,
        belowOrigin: true,
        coverTrigger: false,
        // gutter: ($('.dropdown1').width() * 5) / 2.0 + 0,
        alignment: 'left'
      });
    });
  }
}
