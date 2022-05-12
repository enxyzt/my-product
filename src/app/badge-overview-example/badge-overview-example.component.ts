import { Component, OnInit } from '@angular/core';;
@Component({
  selector: 'app-badge-overview-example',
  templateUrl: './badge-overview-example.component.html',
  styleUrls: ['./badge-overview-example.component.css']
})
export class BadgeOverviewExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  countProd = 1;
}
