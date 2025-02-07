import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-admin-view',
  standalone: true,
  imports: [],
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.css',
})
export class AdminViewComponent implements OnInit {
  message: string | null = null;
  
  router = inject(Router);
  authService = inject(AuthService);
  
  ngOnInit() {
    this.authService.getAdminView().subscribe(
      (response) => {
        this.message = response.message;
      },
      (error) => {
        console.error('Error getting admin view data', error);
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
