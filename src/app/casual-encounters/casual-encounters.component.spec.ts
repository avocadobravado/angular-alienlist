import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualEncountersComponent } from './casual-encounters.component';

describe('CasualEncountersComponent', () => {
  let component: CasualEncountersComponent;
  let fixture: ComponentFixture<CasualEncountersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasualEncountersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasualEncountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
