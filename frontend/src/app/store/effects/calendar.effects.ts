import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, concatMapTo, map, mergeMap, tap } from 'rxjs/operators';
import { EventService } from 'src/app/api/services';
import { AppState } from 'src/app/store/state/app.state';
import * as CalendarActions from './../actions/calendar.actions';
import { disableLoader, enableLoader } from './../actions/loaders.actions';
import { mapEventsToCalendarEvents } from './../mappers/event.mapper';

@Injectable()
export class CalendarEffects {
  constructor(private actions$: Actions, private eventService: EventService, private store: Store<AppState>) {}

  @Effect()
  eventsList$ = this.actions$.pipe(
    ofType(CalendarActions.getEventsAction),
    mergeMap(() => {
      this.store.dispatch(enableLoader({ loaderName: 'getEventsLoader' }));
      return this.eventService.EventGetAll().pipe(
        tap(() => this.store.dispatch(disableLoader({ loaderName: 'getEventsLoader' }))),
        map((events) => CalendarActions.getEventsSuccessAction({ events: mapEventsToCalendarEvents(events) })),
        catchError((error) => of(CalendarActions.getEventsFailureAction({ error })))
      );
    })
  );

  @Effect()
  saveGuest$ = this.actions$.pipe(
    ofType(CalendarActions.saveNewEventAction),
    mergeMap((action) => {
      this.store.dispatch(enableLoader({ loaderName: 'saveNewEventLoader' }));
      return this.eventService.EventPost(action.event).pipe(
        tap(() => this.store.dispatch(disableLoader({ loaderName: 'saveNewEventLoader' }))),
        concatMapTo([CalendarActions.saveNewEventSuccessAction(), CalendarActions.getEventsAction()]),
        catchError((error) => of(CalendarActions.saveNewEventFailureAction({ error })))
      );
    })
  );

  @Effect()
  editGuest$ = this.actions$.pipe(
    ofType(CalendarActions.saveEditedEventAction),
    mergeMap((action) => {
      this.store.dispatch(enableLoader({ loaderName: 'saveEditedEventLoader' }));
      return this.eventService.EventPut(action.event).pipe(
        tap(() => this.store.dispatch(disableLoader({ loaderName: 'saveEditedEventLoader' }))),
        concatMapTo([CalendarActions.saveEditedEventSuccessAction(), CalendarActions.getEventsAction()]),
        catchError((error) => of(CalendarActions.saveEditedEventFailureAction({ error })))
      );
    })
  );

  @Effect()
  deleteGuest$ = this.actions$.pipe(
    ofType(CalendarActions.deleteEventAction),
    mergeMap((action) => {
      this.store.dispatch(enableLoader({ loaderName: 'deleteEventLoader' }));
      return this.eventService.EventDelete(action.eventId).pipe(
        tap(() => this.store.dispatch(disableLoader({ loaderName: 'deleteEventLoader' }))),
        concatMapTo([CalendarActions.deleteEventSuccessAction(), CalendarActions.getEventsAction()]),
        catchError((error) => of(CalendarActions.deleteEventFailureAction({ error })))
      );
    })
  );
}
