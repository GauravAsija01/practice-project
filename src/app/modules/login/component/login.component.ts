import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  submitted = false;
  @Input() loginFlagInput;

  @Output() loginFlagOutput = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginInt();
  }

  togglecomp(){
    this.loginFlagOutput.emit(true);
  }

  loginInt(){
    this.login = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  get form() { return this.login.controls; }

  loginSubmit(){
    this.submitted = true;
    console.log(this.login);
    console.log(this.login.value);
  }



}
