import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Forsale1Component } from './forsale1.component';

describe('Forsale1Component', () => {
  let component: Forsale1Component;
  let fixture: ComponentFixture<Forsale1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forsale1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forsale1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
