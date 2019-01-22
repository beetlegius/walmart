import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionCableService, Channel } from 'angular2-actioncable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';

import * as state               from '../../state/message.state';
import * as actions             from '../../state/message.actions';
import { Message }              from '../../../models/message';
import { MessageFormComponent } from '../../components/message-form/message-form.component';

@Component({
  templateUrl: './message-shell.component.html'
})
export class MessageShellComponent implements OnInit {
  @ViewChild(MessageFormComponent) messageFormComponent: MessageFormComponent;
  channel:      Channel;
  connected:    boolean;
  subscription: Subscription;
  
  messages$:     Observable<Message[]>;
  errorMessage$: Observable<string>;
  submitted$:    Observable<boolean>;
  messageForm:   FormGroup;
 
  constructor(
    private cableService: ActionCableService,
    private store: Store<state.State>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.store.dispatch(new actions.Load());
    this.messages$     = this.store.pipe(select(state.getMessages));
    this.errorMessage$ = this.store.pipe(select(state.getMessagesError));
    this.submitted$    = this.store.pipe(select(state.getSubmitted));

    // Open a connection and obtain a reference to the channel
    this.channel = this.cableService
      .cable('ws://localhost:3001/cable')
      .channel('NotificationsChannel');
 
    // Subscribe to incoming messages
    this.subscription = this.channel.received().subscribe(
      (message: Message) => this.store.dispatch(new actions.ShowMessage(message))
    );

    this.channel.connected().subscribe(
      () => {
        this.connected = true;
        setTimeout(() => this.messageFormComponent.authorInput.nativeElement.focus());
        this.channel.send({ author: 'holamundo@hotmail.com', text: 'bienvenido al canal' });
      }
    )

    this.messageForm = this.fb.group({
      author: ['', [Validators.required, Validators.email]],
      text:   ['', Validators.required]
    })
  }

  get f() { return this.messageForm.controls; }
 
  ngOnDestroy() {
    // Unsubscribing from the messages Observable automatically
    // unsubscribes from the ActionCable channel as well
    this.subscription.unsubscribe();
  }

  create(message) {
    this.store.dispatch(new actions.Submit());
    
    if (this.messageForm.invalid) {
      return;
    }

    this.store.dispatch(new actions.Create(message));
    // this.messageService.create(message).subscribe(
    //   () => {
    //     this.messageForm.reset();
    //     this.messageFormComponent.authorInput.nativeElement.focus();
    //   }
    // );
  }

}
