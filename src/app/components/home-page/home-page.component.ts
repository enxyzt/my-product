import { Component } from '@angular/core';

import { User } from '../../shared/services/user';

@Component({ templateUrl: 'home-page.component.html' })
export class HomePageComponent {
    user: User;

    constructor() {
    }
}
