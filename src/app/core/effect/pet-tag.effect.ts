import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SELECT_SHAPE, SELECT_FONT, ADD_TEXT, TOGGLE_CLIP, TOGGLE_GEMS, COMPLETE, RESET } from './../pet-tag.actions';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions
  ) {}

  @Effect({ dispatch: false })
  reload = this.actions$.pipe(
    ofType<any>(SELECT_SHAPE),
    map(action => {
      console.log(action);
    })
  );
}
