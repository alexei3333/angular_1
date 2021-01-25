import { Component, ContentChild, OnInit } from '@angular/core';
import { ChildOneComponent } from '../child-one/child-one.component';

@Component({
  selector: 'app-child-one-container',
  templateUrl: './child-one-container.component.html',
  styleUrls: ['./child-one-container.component.scss'],
})
export class ChildOneContainerComponent implements OnInit {
  @ContentChild(ChildOneComponent)
  child: ChildOneComponent | null = null;
  constructor() {}

  ngOnInit(): void {}

  // get hasChild()
  // {

  // }
}
