import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Encounters1Component } from './encounters1.component';

describe('Encounters1Component', () => {
  let component: Encounters1Component;
  let fixture: ComponentFixture<Encounters1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Encounters1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Encounters1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
