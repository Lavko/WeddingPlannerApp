import { Injectable } from '@angular/core';
import { EventService } from '@core/api/services';
import * as CalendarActions from '@core/store/actions/calendar.actions';
import { mapEventsToCalendarEvents } from '@core/store/mappers/event.mapper';
import { AppState } from '@core/store/state/app.state';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, concatMapTo, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class CalendarEffects {
  constructor(private actions$: Actions, private eventService: EventService, private store: Store<AppState>) {}

  @Effect()
  eventsList$ = this.actions$.pipe(
    ofType(CalendarActions.getEventsAction),
    mergeMap(() => {
      return this.eventService.EventGetAll().pipe(
        map((events) => CalendarActions.getEventsSuccessAction({ events: mapEventsToCalendarEvents(events) })),
        catchError((error) => of(CalendarActions.getEventsFailureAction({ error })))
      );
    })
  );

  @Effect()
  saveGuest$ = this.actions$.pipe(
    ofType(CalendarActions.saveNewEventAction),
    mergeMap((action) => {
      return this.eventService.EventPost(action.event).pipe(
        concatMapTo([CalendarActions.saveNewEventSuccessAction(), CalendarActions.getEventsAction()]),
        catchError((error) => of(CalendarActions.saveNewEventFailureAction({ error })))
      );
    })
  );

  @Effect()
  editGuest$ = this.actions$.pipe(
    ofType(CalendarActions.saveEditedEventAction),
    mergeMap((action) => {
      return this.eventService.EventPut(action.event).pipe(
        concatMapTo([CalendarActions.saveEditedEventSuccessAction(), CalendarActions.getEventsAction()]),
        catchError((error) => of(CalendarActions.saveEditedEventFailureAction({ error })))
      );
    })
  );

  @Effect()
  deleteGuest$ = this.actions$.pipe(
    ofType(CalendarActions.deleteEventAction),
    mergeMap((action) => {
      return this.eventService.EventDelete(action.eventId).pipe(
        concatMapTo([CalendarActions.deleteEventSuccessAction(), CalendarActions.getEventsAction()]),
        catchError((error) => of(CalendarActions.deleteEventFailureAction({ error })))
      );
    })
  );
}
