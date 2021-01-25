import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOneContainerComponent } from './child-one-container.component';

describe('ChildOneContainerComponent', () => {
  let component: ChildOneContainerComponent;
  let fixture: ComponentFixture<ChildOneContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildOneContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildOneContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
