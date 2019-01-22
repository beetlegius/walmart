import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { Message } from '../../models';
import { MessageService } from '../services';

import * as messageActions from './message.actions';

@Injectable()
export class MessageEffects {

  constructor(
    private messageService: MessageService,
    private actions$: Actions
  ) {}

  @Effect()
  loadMessages$: Observable<Action> = this.actions$.pipe(
    ofType(messageActions.MessageActionTypes.Load),
    mergeMap(action =>
      this.messageService.all().pipe(
        map((messages: Message[]) => (new messageActions.LoadSuccess(messages))),
        catchError(err => of(new messageActions.LoadFail(err)))
      )
    )
  );

  @Effect()
  createMessage$: Observable<Action> = this.actions$.pipe(
    ofType(messageActions.MessageActionTypes.Create),
    map((action: messageActions.Create) => action.payload),
    mergeMap((message: Message) =>
      this.messageService.create(message).pipe(
        map((messages: Message) => (new messageActions.CreateSuccess(message))),
        catchError(err => of(new messageActions.CreateFail(err)))
      )
    )
  )

}