import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(registrationData: any) {
    return this.http.post('http://localhost:8080/register', registrationData, {
      withCredentials: true,
    });
  }

  login(credentials: any) {
    return this.http.post('http://localhost:8080/authentication', credentials, {
      responseType: 'text',
      withCredentials: true,
    });
  }

  getUserRoles() : Observable<String[]> {
    return this.http.get<String[]>('http://localhost:8080/roles', {
      withCredentials: true,
    });
  }

  getUser() {
    return this.http.get<{ message: String }>(
      'http://localhost:8080/user',
      {
        withCredentials: true,
      }
    );
  }

  getAdmin() {
    return this.http.get<{ message: string }>('http://localhost:8080/admin', {
      withCredentials: true,
    });
  }

  getAdminView() {
    return this.http.get<{ message: string }>(
      'http://localhost:8080/admin/adminProfile',
      {
        withCredentials: true,
      }
    );
  }



  logout() {
    return this.http.get('http://localhost:8080/clearCookie', {
      withCredentials: true,
    });
  }
}
