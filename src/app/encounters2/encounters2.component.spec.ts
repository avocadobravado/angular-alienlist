import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Encounters2Component } from './encounters2.component';

describe('Encounters2Component', () => {
  let component: Encounters2Component;
  let fixture: ComponentFixture<Encounters2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Encounters2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Encounters2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
