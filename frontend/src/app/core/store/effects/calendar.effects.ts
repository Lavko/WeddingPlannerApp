import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, concatMapTo, map, mergeMap } from 'rxjs/operators';
import { EventService } from 'src/app/core/api/services';
import { AppState } from 'src/app/core/store/state/app.state';
import * as CalendarActions from './../actions/calendar.actions';
import { mapEventsToCalendarEvents } from './../mappers/event.mapper';

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
