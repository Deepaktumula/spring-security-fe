import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  credentials = {
    userName: '',
    password: '',
  };

  router = inject(Router);
  authService = inject(AuthService);

  onSubmit() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        if (response) {
          this.checkUserNavigate();
        } else {
          console.log('Response not found', response);
        }
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }

  checkUserNavigate() {
    this.authService.getUserRoles().subscribe((roles) =>{
      if (roles.includes('ROLE_ADMIN')) {
        this.router.navigateByUrl('/admin');
      } else if (roles.includes('ROLE_USER')) {
        console.log('USER');
        this.router.navigateByUrl('/user');
      } else if ( roles.includes('ROLE_ADMIN') && roles.includes('ROLE_USER') ) {
        this.router.navigateByUrl('/admin');
      } else {
        console.log('Invalid user role');
      }
    }, (error) => {
      console.error('Error fetching user roles', error);
    });
  }
}
