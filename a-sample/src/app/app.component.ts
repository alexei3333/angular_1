import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a-sample';
  outputText = "press the button to start parsing....";
  url = "https://ib.psbank.ru/store/products/consumer-loan";
  isLoading=false;
  constructor()
  {

  }
  private  appendLogText(txt:string):void
  {
      
  }


  parsePage()
  {
    //alert("working");
    this.outputText=`start parsing ${this.url}....`;
    this.isLoading=true;
  }
  breakParsing()
  {
    this.isLoading=false;
  }
  
}
