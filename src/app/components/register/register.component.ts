import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registrationData = {
    userName: '',
    password: '',
    roles: '',
  };

  router = inject(Router);
  authService = inject(AuthService);

  onSubmit() {
    this.authService.register(this.registrationData).subscribe(
      (response) => {
        if (response) {
          console.log('Registration successful', response);
          this.router.navigateByUrl('/login');
        } else {
          console.log('Registration failed', response);
        }
      },
      (error) => {
        console.error('Registration failed', error);
      }
    );
  }
}
