import { Component } from '@angular/core';

import { User } from '../../_models';
import { AccountService } from '../../services';

@Component({ templateUrl: 'home-page.component.html' })
export class HomePageComponent {
    user: User;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
}
