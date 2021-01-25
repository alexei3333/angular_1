import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  year: number = 2021;
  constructor()
  {

  }
  // tslint:disable-next-line: typedef
  setNewYearParent(yearCur: number)
  {
     this.year = yearCur;
  }

}
