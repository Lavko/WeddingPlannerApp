import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExpenseDialogComponent } from './edit-expense-dialog.component';

describe('EditExpenseDialogComponent', () => {
  let component: EditExpenseDialogComponent;
  let fixture: ComponentFixture<EditExpenseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditExpenseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExpenseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
