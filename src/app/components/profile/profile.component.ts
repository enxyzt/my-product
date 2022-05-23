import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from '../../services';
import { MustMatch } from '../../_helpers';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    form: FormGroup;
    account = this.accountService.userValue;
    loading = false;
    submitted = false;
    deleting = false;

  constructor(private accountService: AccountService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: [this.account.firstName, Validators.required],
      lastName: [this.account.lastName, Validators.required],
      email: [this.account.email, [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6)]],
      confirmPassword: ['']
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

   // convenience getter for easy access to form fields
   get f() { return this.form.controls; }

   onSubmit() {
       this.submitted = true;

       // reset alerts on submit
       this.alertService.clear();

       // stop here if form is invalid
       if (this.form.invalid) {
           return;
       }

       this.loading = true;
       this.accountService.update(this.account.id, this.form.value)
           .pipe(first())
           .subscribe({
               next: () => {
                   this.alertService.success('Update successful', { keepAfterRouteChange: true });
                   this.router.navigate(['../profile'], { relativeTo: this.route });
                   this.loading = false;
               },
               error: error => {
                   this.alertService.error(error);
                   this.loading = false;
               }
           });
   }

   onDelete() {
       if (confirm('Are you sure?')) {
           this.deleting = true;
           this.accountService.delete(this.account.id)
               .pipe(first())
               .subscribe(() => {
                   this.alertService.success('Account deleted successfully', { keepAfterRouteChange: true });
                   this.router.navigate(['../login'], { relativeTo: this.route });

               });
       }
   }
}
