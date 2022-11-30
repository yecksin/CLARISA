import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../shared/services/auth.service';
@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss'],
})
export class HorizontalMenuComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  reload() {
    setTimeout(() => {
      window.location.reload();
    }, 0);
  }

  onClick() {
    this.authService.logout();
  }
}
