import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { authGuard } from './gaurds/auth.guard';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title:'home'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'login'
    },
    {
        path: 'signup',
        component: SignupComponent,
        title: 'signup'
    },
    {
        path:'aboutus',
        loadComponent: () => import('./components/aboutus/aboutus.component').then(m => m.AboutusComponent),        //lazy loading 
        title:'aboutus'
    },
    {
        path:'createcode',
        loadComponent: () => import('./components/createbin/createbin.component').then(m=> m.CreatebinComponent),
        canActivate: [authGuard],           //check karega ki user login hai ki nahi
        title:'create code'
    },
    {
        path:'**',
        component:NotfoundComponent,
        title:'pageNotFound'
    }

];
