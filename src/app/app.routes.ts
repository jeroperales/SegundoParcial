import { Routes } from '@angular/router';
import { ListPilotoComponent } from './components/piloto/list-piloto/list-piloto.component';
import { AddPilotoComponent } from './components/piloto/add-piloto/add-piloto.component';
import { UpdateComponent } from './components/piloto/update/update.component';

export const routes: Routes = [{
    path: "",
    redirectTo: "list",
    pathMatch: 'full'
},
    { 
        path: "**",
        redirectTo: "list",
        pathMatch: 'full'
},
{
    path: "add",
    component: AddPilotoComponent
},
{
    path: "list",
    component: ListPilotoComponent
},
{
    path: "update",
    component: UpdateComponent
}



];
