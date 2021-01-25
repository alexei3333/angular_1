import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bench App';
  year = 2021;
  constructor()
  {

  }
  // tslint:disable-next-line: typedef
  setNewYearParent(yearCur: number)
  {
     this.year = yearCur;
  }

}
