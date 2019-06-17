import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  //showLogin = false;
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

  loginSubmit(){
    console.log(this.login);
  }

  // showToggle(){
  //   this.showHideToggle = !this.showHideToggle;
  // }

  showRegisterForm(){
    console.log("Show Register Form");
    this.showLogin = !this.showLogin;
  }

}
