import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxdetailComponent } from './ajaxdetail.component';

describe('AjaxdetailComponent', () => {
  let component: AjaxdetailComponent;
  let fixture: ComponentFixture<AjaxdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjaxdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
