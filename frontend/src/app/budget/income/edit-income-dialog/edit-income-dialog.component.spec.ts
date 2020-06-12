import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIncomeDialogComponent } from './edit-income-dialog.component';

describe('EditIncomeDialogComponent', () => {
  let component: EditIncomeDialogComponent;
  let fixture: ComponentFixture<EditIncomeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIncomeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIncomeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
