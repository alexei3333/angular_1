import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() year?: number;
  @Output() setYearEvent = new EventEmitter<number>();
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }

  ngOnInit(): void {
    this.year = 2018;
  }
  setNewYear(val: number): void {
    this.setYearEvent.emit(val);
  }
  @HostListener('mouseenter') onMouseEnter(): void {
    this.setFontWeight('bold');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.setFontWeight('normal');
  }
  private setFontWeight(val: string): void {
    this.renderer.setStyle(this.element.nativeElement, 'font-weight', val);
  }
}
