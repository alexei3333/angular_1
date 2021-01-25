import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoformComponent } from './autoform.component';

describe('AutoformComponent', () => {
  let component: AutoformComponent;
  let fixture: ComponentFixture<AutoformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
