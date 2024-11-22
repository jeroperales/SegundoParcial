import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AddPilotoComponent } from "./components/piloto/add-piloto/add-piloto.component";
import { ListPilotoComponent } from './components/piloto/list-piloto/list-piloto.component';
import { NavbarComponent } from "./navbar/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddPilotoComponent, ListPilotoComponent, NavbarComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parcialPerales';
}
