import { animate, style, transition, trigger } from '@angular/animations';

export const routeTransitionAnimations = trigger('triggerName', [
  transition('* => *', [
    style({ opacity: 0 }),

    // animation and styles at end of transition
    animate('0.2s', style({ opacity: 1 })),
  ]),
]);
