import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent {
  @ViewChild('author') authorInput: ElementRef;
  @Input()  form: FormGroup;
  @Input()  submitted: boolean;
  @Output() submitForm = new EventEmitter<Message>();

  send() {
    this.submitForm.emit(this.form.value);
  }

  get f() { return this.form.controls; }
}
