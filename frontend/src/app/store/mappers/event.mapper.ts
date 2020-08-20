import { CalendarEvent } from 'angular-calendar';
import { EventColor } from './../../api/models/event-color';
import { EventDto } from './../../api/models/event-dto';

export const mapEventsToCalendarEvents = (events: EventDto[]): CalendarEvent<{ event: EventDto }>[] => {
  return events.map((event) => {
    return {
      title: event.title,
      start: new Date(event.date),
      allDay: true,
      color: mapColor(event.color),
      meta: {
        event,
      },
    } as CalendarEvent<{ event: EventDto }>;
  });
};

const mapColor = (eventColor: EventColor) => {
  switch (eventColor) {
    case 0: // grey
      return { primary: '#37474F', secondary: '#B0BEC5' };
    case 1: // red
      return { primary: '#B71C1C', secondary: '#FFCDD2' };
    case 2: // yellow
      return { primary: '#F9A825', secondary: '#FFF9C4' };
    case 3: // green
      return { primary: '#2E7D32', secondary: '#C8E6C9' };
    case 4: // blue
      return { primary: '#1565C0', secondary: '#BBDEFB' };
    case 5: // white
      return { primary: '#fff', secondary: '#fff' };
  }
};
