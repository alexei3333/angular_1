import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParseformComponent } from './parseform.component';

describe('ParseformComponent', () => {
  let component: ParseformComponent;
  let fixture: ComponentFixture<ParseformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParseformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
