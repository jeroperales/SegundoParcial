import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Piloto } from '../../../interfaces/piloto.interface';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PilotoService } from '../../../services/piloto.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-add-piloto',
  standalone: true,
  imports: [ReactiveFormsModule,
  FormsModule,
  CommonModule,
  RouterModule],
  templateUrl: './add-piloto.component.html',
  styleUrl: './add-piloto.component.css'
})
export class AddPilotoComponent {
  @Output() //EMISION DE HIJO A PADRE
  pilotoEmitter = new EventEmitter<Piloto>

  fb = inject(FormBuilder);
  pilotoService = inject(PilotoService);

  pilotosList: Piloto[] = [];

  formulario = this.fb.nonNullable.group({
    id: [0, Validators.required],
    nombre: ["", Validators.required],
    escuderia: ["", Validators.required],
    escuderiaActual: ["", Validators.required],
    anioDebut: [0, Validators.required],
    cantPremios: [0, Validators.required],
    cantPodios: [0, Validators.required],
    isActive: [false, Validators.required]
  })

  addPiloto() { //FUNCION QUE AGREGA PILOTO Y LLAMA A FUNCION QUE TIENE HTTP
    if (this.formulario.invalid) return;
  
    const piloto = this.formulario.getRawValue();

    console.log(piloto)

    this.addPilotoJSON(piloto);

    this.pilotoEmitter.emit(piloto);

  }

  addPilotoJSON(piloto: Piloto) //FUNCION HTTP
  {
    this.pilotoService.postPiloto(piloto).subscribe({
      next: (piloto: Piloto)=> {
        console.log('cargado correctamente')
      },
      error: (e: Error) =>{
        console.log(e.message)
        console.log('NO')
      }
    })
  }



}


