import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pets1Component } from './pets1.component';

describe('Pets1Component', () => {
  let component: Pets1Component;
  let fixture: ComponentFixture<Pets1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pets1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pets1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
