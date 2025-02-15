import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { Page404Component } from './pages/page404/page404.component';
import { ServicioViewComponent } from './pages/servicio-view/servicio-view.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: HomeComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'servicio/:url', component: ServicioViewComponent },
    { path: '**', component: Page404Component }
    //{path: '**', redirectTo:'home'}
];
