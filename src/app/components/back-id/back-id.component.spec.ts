import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackIdComponent } from './back-id.component';

describe('BackIdComponent', () => {
  let component: BackIdComponent;
  let fixture: ComponentFixture<BackIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
