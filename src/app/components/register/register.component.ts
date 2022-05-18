import { Component, OnInit } from '@angular/core';
import { CheckFormService } from '../../services/check-form.service';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  name: string | undefined;
  login: string | undefined;
  email: string | undefined;
  password: string | undefined;

  constructor( private checkForm: CheckFormService,
    private flashMessages: FlashMessagesService ) { }

  ngOnInit(): void {
  }

  userRegisterClick(){
    const user = {
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password
    };


    if(!this.checkForm.checkName(user.name)){
      this.flashMessages.show("Name is required",
      {cssClass: 'alert-danger'});
    return false;
  } else if (!this.checkForm.checkLogin(user.login)){
    this.flashMessages.show("Login is required",
      {cssClass: 'alert-danger', timeout: 3000});
    return false;
    } else if (!this.checkForm.checkEmail(user.email)){
      this.flashMessages.show("Email is required",
      {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }else if (!this.checkForm.checkPassword(user.password)){
      this.flashMessages.show("Password is required",
      {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
  }
}
