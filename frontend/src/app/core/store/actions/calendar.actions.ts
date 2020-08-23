import { createAction, props } from '@ngrx/store';
import { CalendarEvent } from 'angular-calendar';
import { CreateEventDto } from 'src/app/core/api/models/create-event-dto';
import { UpdateEventDto } from 'src/app/core/api/models/update-event-dto';

export const getEventsAction = createAction('[Calendar Page] Get events');
export const getEventsSuccessAction = createAction(
  '[Calendar Page] Get events success',
  props<{ events: CalendarEvent[] }>()
);
export const getEventsFailureAction = createAction('[Calendar Page] Get events failure', props<{ error: any }>());

export const saveNewEventAction = createAction('[Add Event Dialog] Save new event', props<{ event: CreateEventDto }>());
export const saveNewEventSuccessAction = createAction('[Add Event Dialog] Save new event success');
export const saveNewEventFailureAction = createAction(
  '[Add Event Dialog] Save new event failure',
  props<{ error: any }>()
);

export const saveEditedEventAction = createAction(
  '[Edit Event Dialog] Save edited event',
  props<{ event: UpdateEventDto }>()
);
export const saveEditedEventSuccessAction = createAction('[Edit Event Dialog] Save edited event success');
export const saveEditedEventFailureAction = createAction(
  '[Edit Event Dialog] Save edited event failure',
  props<{ error: any }>()
);

export const deleteEventAction = createAction('[Calendar Page] Delete event', props<{ eventId: number }>());
export const deleteEventSuccessAction = createAction('[Calendar Page] Delete event success');
export const deleteEventFailureAction = createAction('[Calendar Page] Delete event failure', props<{ error: any }>());
