import {
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChildOneComponent } from '../child-one/child-one.component';
import { FooterComponent } from '../../_layout/footer/footer.component';

@Component({
  selector: 'app-child-one-container',
  templateUrl: './child-one-container.component.html',
  styleUrls: ['./child-one-container.component.scss'],
})
export class ChildOneContainerComponent implements OnInit {
  @ContentChild(ChildOneComponent)
  child: ChildOneComponent | null = null;

  @ViewChild(FooterComponent)
  footer: FooterComponent | null = null;

  @ViewChild('ptest')
  paragraphRef: ElementRef | null = null;

  constructor() {}

  ngOnInit(): void {}

  get hasChild(): boolean {
    return this.child !== null;
  }
  get hasFooter(): boolean {
    return this.footer !== null;
  }
  get pTestContent(): string {
    return this.paragraphRef === null
      ? 'not found'
      : this.paragraphRef.nativeElement.textContent;
  }
}
