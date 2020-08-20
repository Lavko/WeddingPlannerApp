import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HomeService } from 'src/app/api/services';
import { AppState } from 'src/app/store/state/app.state';
import { getSummaryAction, getSummaryFailureAction, getSummarySuccessAction } from './../actions/summaryActions';

@Injectable()
export class SummaryEffects {
  constructor(private actions$: Actions, private summaryService: HomeService, private store: Store<AppState>) {}

  @Effect()
  summary$ = this.actions$.pipe(
    ofType(getSummaryAction),
    mergeMap(() => {
      return this.summaryService.HomeGet().pipe(
        map((summary) => getSummarySuccessAction({ summary })),
        catchError((error) => of(getSummaryFailureAction({ error })))
      );
    })
  );
}
