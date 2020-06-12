import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIncomeDialogComponent } from './add-income-dialog.component';

describe('AddIncomeDialogComponent', () => {
  let component: AddIncomeDialogComponent;
  let fixture: ComponentFixture<AddIncomeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIncomeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIncomeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
