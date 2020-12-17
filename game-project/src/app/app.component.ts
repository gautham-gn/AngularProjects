import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game-project';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number){
    //console.log('onIntervalFired Method called');
    console.log(firedNumber);
    if (firedNumber % 2 === 1) {
      this.oddNumbers.push(firedNumber);
      console.log(this.oddNumbers);
    }
    else {
      this.evenNumbers.push(firedNumber);
      console.log(this.evenNumbers);
    }
  }
}
