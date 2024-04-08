import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { LiveComponent } from './pages/live/live.component';
import { CenterComponent } from './pages/center/center.component';

export const routes: Routes = [
    {
        path:'', component: HomeComponent
    },
    {
        path:'contact', component: ContactComponent
    },
    {
        path:'about',component: AboutComponent
    },
    {
        path:'live',component:LiveComponent
    },
    {
        path:'center', component: CenterComponent
    }
];
