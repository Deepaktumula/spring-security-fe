import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
    {
        path:'',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'admin',
        component:AdminComponent
    },
    {
        path:'adminview',
        component: AdminViewComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
