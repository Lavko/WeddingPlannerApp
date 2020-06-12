import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetSummaryPageComponent } from './budget-summary-page.component';

describe('BudgetSummaryPageComponent', () => {
  let component: BudgetSummaryPageComponent;
  let fixture: ComponentFixture<BudgetSummaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetSummaryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
