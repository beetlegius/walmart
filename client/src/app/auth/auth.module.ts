import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer as authReducer } from './state/auth.reducer';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthEffects } from './state/auth.effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWTInterceptor } from './jwt.interceptor';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature(
      [ AuthEffects ]
    )
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true }
  ]
})
export class AuthModule { }
