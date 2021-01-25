import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerHolderComponent } from './container-holder.component';

describe('ContainerHolderComponent', () => {
  let component: ContainerHolderComponent;
  let fixture: ComponentFixture<ContainerHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
