import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  message: string | null = null;

  router = inject(Router);
  authService = inject(AuthService);

  ngOnInit() {
    this.authService.getAdmin().subscribe(
      (response) => {
        this.message = response.message;
      },
      (error) => {
        console.error('Error getting admin data', error);
      }
    );
  }

  navigateToAdminView() {
    this.router.navigateByUrl('/adminview');
  }

  logout() {
    this.authService.logout().subscribe(
      () => {
        this.router.navigateByUrl('/login');
      },
      (error) => {
        console.error('Error during logout', error);
      }
    );
  }
}
