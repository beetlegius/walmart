import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { ActionCableService, Channel } from 'angular2-actioncable';
import { MessageService } from '../../message.service';
import { Message } from '../../message';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageFormComponent } from '../../components/message-form/message-form.component';

@Component({
  templateUrl: './message-shell.component.html'
})
export class MessageShellComponent implements OnInit {
  @ViewChild(MessageFormComponent) messageFormComponent: MessageFormComponent;
  channel: Channel;
  connected: boolean;
  subscription: Subscription;
  
  messages: Message[] = [];
  submitted: boolean = false;
  messageForm: FormGroup;
 
  constructor(
    private cableService: ActionCableService,
    private messageService: MessageService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.messageService.all().subscribe(messages => this.messages = messages);

    // Open a connection and obtain a reference to the channel
    this.channel = this.cableService
      .cable('ws://localhost:3001/cable')
      .channel('NotificationsChannel');
 
    // Subscribe to incoming messages
    this.subscription = this.channel.received().subscribe(
      (message: Message) => this.messages.push(message)
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
    this.submitted = true;
    
    if (this.messageForm.invalid) {
      return;
    }

    this.messageService.create(message).subscribe(
      () => {
        this.submitted = false;
        this.messageForm.reset();
        this.messageFormComponent.authorInput.nativeElement.focus();
      }
    );
  }

}
