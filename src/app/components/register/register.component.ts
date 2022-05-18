import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm! : FormGroup;



  storeUser(): void {
    localStorage.setItem('users', JSON.stringify(this.myForm.value));
  }

  constructor (private formBuilder : FormBuilder) {

    }

    submit(){
      console.log(this.myForm.value);

    }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({

      "userName": new FormControl("", Validators.pattern('^[A-Z,a-z0-9_-]{3,32}$')),
      "userLogin": new FormControl("", [Validators.pattern('^[A-Za-z0-9_-]{5,32}$'), Validators.required]),
      "userEmail": new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      "userPassword": new FormControl("", [Validators.required,
        Validators.pattern('^[A-Z,a-z0-9_-]{3,32}$')])
      });
  }



}
