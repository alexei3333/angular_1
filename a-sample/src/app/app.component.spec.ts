import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'a-sample'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('a-sample');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('a-sample app is running!');
  });


  it('should update the value of the input field', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const input = fixture.nativeElement.querySelector('input');
    // const event = createNewEvent('input');

    // input.value = 'Red';
    // input.dispatchEvent(event);

    // expect(fixture.componentInstance.favoriteColorControl.value).toEqual('Red');
  });
});
