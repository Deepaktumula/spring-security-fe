import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  message: any | null = null;

  router = inject(Router);
  authService = inject(AuthService);

  ngOnInit() {
    this.authService.getUser().subscribe(
      (response) => {
        this.message = response.message;
      },
      (error) => {
        console.error('Error getting User data', error);
      }
    );
  }

  logout() {
    this.authService.logout().subscribe(
      () => {
        this.router.navigateByUrl('/login');
      },
      (error) => {
        console.error('Error logging out', error);
      }
    );
  }
}
