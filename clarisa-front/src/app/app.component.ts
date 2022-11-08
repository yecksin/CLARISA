import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'clarisa-front';
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.inLogin = false;
  }
}
