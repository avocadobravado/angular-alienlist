import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pets2Component } from './pets2.component';

describe('Pets2Component', () => {
  let component: Pets2Component;
  let fixture: ComponentFixture<Pets2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pets2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pets2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
