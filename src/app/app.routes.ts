import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FoodPageComponent } from './components/food-page/food-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    }, 
    {
        path: 'search/:searchTerm',
        component: HomepageComponent
    },
    {
        path: 'tag/:tag',
        component: HomepageComponent
    },
    {
        path: 'food/:id',
        component: FoodPageComponent
    }
];
