import { NgModule } from '@angular/core';
import { MessageShellComponent } from './containers/message-shell/message-shell.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MessageFormComponent } from './components/message-form/message-form.component';

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
    RouterModule.forChild(messageRoutes)
  ]
})
export class MessageModule { }
