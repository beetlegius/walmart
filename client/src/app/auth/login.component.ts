import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromRoot from '../state/app.state';
import * as authActions from './state/auth.actions';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth } from '../models';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm:    FormGroup;
  loading:      boolean = false;
  loginInvalid: boolean = false;
  submitted:    boolean = false;
  returnUrl:    string;

  constructor(
    private fb:     FormBuilder,
    private store:  Store<fromRoot.State>,
    private route:  ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email:    ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    // dispatch logout action
    this.store.dispatch(new authActions.Logout());
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    // this.loading = true;
    // this.auth.login(this.f.email.value, this.f.password.value).subscribe(
    //   (data) => this.router.navigate([this.returnUrl]),
    //   (error) => {
    //     this.loading = false;
    //     this.loginInvalid = true;
    //   }
    // );

    const auth: Auth = this.loginForm.value;
    // this.auth.authenticate(email, password).subscribe(
      //   (token: string) => console.log(token)
      // )
    this.store.dispatch(new authActions.Authenticate(auth));
  }

}
