import { Routes } from '@angular/router';
import { ListPilotoComponent } from './components/piloto/list-piloto/list-piloto.component';
import { AddPilotoComponent } from './components/piloto/add-piloto/add-piloto.component';

export const routes: Routes = [{
    path: "",
    component: ListPilotoComponent
},
    {path: "**",
    component: ListPilotoComponent,
    pathMatch: 'full'
},

{
    path: "/add",
    component: AddPilotoComponent
},
{
    path: "/list",
    component: ListPilotoComponent
}



];
