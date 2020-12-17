import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  buttonClicked:boolean = false;
  buttonClicks = []

  constructor() { }

  onClickButton() {
    console.log(Date.now())
    this.buttonClicks.push("Clicked the Button at " + new Date())
    this.buttonClicked = !this.buttonClicked;
  }

  ngOnInit(): void {
  }

}
