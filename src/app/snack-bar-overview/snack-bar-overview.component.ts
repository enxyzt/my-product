import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { NotificationService } from "../notification.service";

/**
 * @title Basic snack-bar
 */
@Component({
  selector: "snack-bar-overview",
  templateUrl: "./snack-bar-overview.component.html",
  styleUrls: ["./snack-bar-overview.component.css"]
})
export class SnackBarOverviewComponent {
  constructor(
    public notificationService: NotificationService,
    private _snackBar: MatSnackBar
  ) {}

  openSnackBar(message: string, action: string, className: string) {
    this._snackBar.open(message, action, {
      duration: 0,
      panelClass: [className]
    });
  }

  showAlert() {
    this.notificationService.alert("an alert", "notice", () => {
      this.notificationService.success("alert oked");
    });
  }

  showConfirm() {
    this.notificationService.confirmation("it will be gone forever", () => {
      this.notificationService.success("confirm oked");
    },
    'Are you sure?',
     () => {
      this.notificationService.error("confirm canceled");
    });
  }
}
