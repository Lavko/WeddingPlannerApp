import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CalendarSummaryDto } from 'src/app/core/api/models/calendar-summary-dto';
import { AppState } from 'src/app/core/store/state/app.state';
import { summarySelectors } from 'src/app/core/store/state/summary.state';

@Component({
  selector: 'app-calendar-summary',
  templateUrl: './calendar-summary.component.html',
  styleUrls: ['./calendar-summary.component.scss'],
})
export class CalendarSummaryComponent implements OnInit {
  public calendarSummary$: Observable<CalendarSummaryDto>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.calendarSummary$ = summarySelectors.getCalendarSummary(this.store);
  }
}
