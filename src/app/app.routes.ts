import { Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export const routes: Routes = [
    {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
    {path: 'crisis-list', component: CrisisListComponent},
    {path: 'heroes-list', component: HeroesListComponent},

    // The new route uses a path, **. This path is how Angular identifies a wildcard route. 
    // - Any route that does not match an existing route in your configuration will use this route.
    // IMPORTANT: Notice that the wildcard route is placed at the end of the array. 
    // - The order of your routes is important, as Angular applies routes in order and uses the first match it finds.
    {path: '**', component: PageNotFoundComponent}
    
];
