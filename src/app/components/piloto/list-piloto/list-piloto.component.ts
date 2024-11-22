import { Component, inject } from '@angular/core';
import { AddPilotoComponent } from '../add-piloto/add-piloto.component';
import { PilotoService } from '../../../services/piloto.service';
import { Piloto } from '../../../interfaces/piloto.interface';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list-piloto',
  standalone: true,
  imports: [AddPilotoComponent,
  RouterOutlet,
RouterModule],
  templateUrl: './list-piloto.component.html',
  styleUrl: './list-piloto.component.css'
})
export class ListPilotoComponent {

  pilotoService = inject(PilotoService);

  listPilotos: Piloto[] = [];

  listarPilotos(){
     this.pilotoService.getPilotos().subscribe({
      next: (pilotos: Piloto[])=> {
      console.log('Se obtuvo la lista de la base de datos')   
      this.listPilotos = pilotos;     
      },
      error: (e: Error) =>{
        console.log(e.message)
      }
    }
    )
  }
    
  agregarPiloto(piloto: Piloto) {
    this.listPilotos = [... this.listPilotos, piloto];

  }

}