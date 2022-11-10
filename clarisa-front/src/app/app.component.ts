import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { RedirectService } from './shared/services/redirect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'clarisa-front';
  urls: any;
  constructor(
    public authService: AuthService,
    public redirectServices: RedirectService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.authService.inLogin = false;
    this.urls = this.redirectServices.findRedirectTo(
      window.location.href,
      window.location.origin
    );
    if (this.urls != '') {
      window.location.href = this.urls;
      window.location.reload;
    }
  }
}
