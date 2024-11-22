import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UpdateComponent } from '../../components/piloto/update/update.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
  RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
