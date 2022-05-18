import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckFormService {

  constructor() { }

  checkName(name: any){
    if(name == undefined || name.length <=2 || name.length >=32)
      return false;
    else
      return true;
  }
  checkLogin(login: any){
    if(login == undefined)
      return false;
    else
      return true;
  }
  checkEmail(email: any){
    if(email == undefined)
      return false;
    else
      return true;
  }
  checkPassword(password: any){
    if(password == undefined || password.length <=7 || password.length >=32)
      return false;
    else
      return true;
  }
}

