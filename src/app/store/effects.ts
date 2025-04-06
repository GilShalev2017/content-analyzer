//content.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addResult } from './actions';
import { map } from 'rxjs/operators';
import { WebsocketService } from '../services/websocket.service';

@Injectable()
export class AppEffects {
  loadResults$: any;

  constructor(private actions$: Actions, private websocketService: WebsocketService) {
    // this.loadResults$ = createEffect(() =>
    //   this.actions$.pipe(
    //     ofType(addResult),
    //     this.websocketService.connect(),
    //     map((result: any) => addResult({ result }))
    //   ))
    
  }
}