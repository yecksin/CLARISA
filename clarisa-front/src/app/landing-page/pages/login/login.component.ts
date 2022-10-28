import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserAuth } from '../../../shared/interfaces/user-auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
    this.authService.inLogin = true;
    if (!!this.authService.localStorageUser) {
      //change this route when the new component is ready
      //this.router.navigate(['/admin']);
    }
  }

  loginForm: FormGroup;
  successLogin = false;

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const authData: UserAuth = { ...this.loginForm.value };
    console.log(authData);
    this.authService.userAuth(authData).subscribe({
      next: (resp) => {
        console.log(resp);
        const { access_token, user } = resp;
        this.authService.localStorageToken = access_token;
        this.authService.localStorageUser = user;
        this.successLogin = true;
        setTimeout(() => {
          alert('Login successfull');
          //change this route when the new component is ready
          //this.router.navigate(['/admin']);
        }, 1500);
      },
      error: (err) => {
        //show alert
        alert(err.error.message);
      },
    });
  }
}
