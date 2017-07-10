import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Forsale2Component } from './forsale2.component';

describe('Forsale2Component', () => {
  let component: Forsale2Component;
  let fixture: ComponentFixture<Forsale2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forsale2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forsale2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
