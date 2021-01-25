import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() year?: number ;
  @Output() setYearEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
    this.year  = 2018;
  }
  setNewYear(val: number): void
  {
    this.setYearEvent.emit(val);
  }
}
