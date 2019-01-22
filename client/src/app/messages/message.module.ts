import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MessageShellComponent } from './containers/message-shell/message-shell.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { SharedModule } from '../shared/shared.module';
import { MessageEffects } from './state/message.effects';
import { reducer as messageReducer } from './state/message.reducer';

const messageRoutes: Routes = [
  { path: '', component: MessageShellComponent }
]

@NgModule({
  declarations: [
    MessageShellComponent,
    MessageListComponent,
    MessageFormComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(messageRoutes),
    StoreModule.forFeature('messages', messageReducer),
    EffectsModule.forFeature(
      [ MessageEffects ]
    )
  ]
})
export class MessageModule { }
