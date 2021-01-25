import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'a-sample';
  outputText = 'press the button to start parsing....';
  url = 'https://ib.psbank.ru/store/products/consumer-loan';
  isLoading = false;
  constructor() { }

  ngOnInit(): void {
  }
  private  appendLogText(txt: string): void
  {

  }


  parsePage(): void
  {
    this.outputText = `start parsing ${this.url}....`;
    this.isLoading = true;
  }
  breakParsing(): void
  {
    this.isLoading = false;
  }
}
