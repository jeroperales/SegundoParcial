import { Component, inject, OnInit } from '@angular/core';
import { AddPilotoComponent } from '../add-piloto/add-piloto.component';
import { PilotoService } from '../../../services/piloto.service';
import { Piloto } from '../../../interfaces/piloto.interface';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-piloto',
  standalone: true,
  imports: [AddPilotoComponent,
  RouterModule,
CommonModule],
  templateUrl: './list-piloto.component.html',
  styleUrl: './list-piloto.component.css'
})
export class ListPilotoComponent implements OnInit{

  ngOnInit(): void {
    this.listarPilotos()
  }

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

  borrarPiloto(id: number){

    this.pilotoService.deletePiloto(id).subscribe({
      next: ()=> {
        console.log ('Ha sido eliminado correctamente')
      },
      error: (e: Error) =>{
        console.log(e.message)
      }
    })}


}