import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontIdComponent } from './front-id.component';

describe('FrontIdComponent', () => {
  let component: FrontIdComponent;
  let fixture: ComponentFixture<FrontIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
