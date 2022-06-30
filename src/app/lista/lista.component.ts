import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {


  // mostrarBotones: boolean = false;
  // aprobado: boolean = false;
  alumnos = [
    {
      nombre: 'Franco',
      nota: 10,
      img: '../../assets/franco.png',
      estado: '',
    },
    {
      nombre: 'Pedro',
      nota: 4,
      img: '../../assets/pedro.png',
      estado: '',

    },
    {
      nombre: 'Juan',
      nota: 8,
      img: '../../assets/juan.png',
      estado: '',

    },
    {
      nombre: 'Sofia',
      nota: 6,
      img: '../../assets/sofia.png',
      estado: '',

    },
    {
      nombre: 'Carla',
      nota: 9,
      img: '../../assets/carla.png',
      estado: '',

    },
    {
      nombre: 'Diana',
      nota: 3,
      img: '../../assets/diana.png',
      estado: '',

    },
  ]




  constructor() { }

  ngOnInit(): void {
  }


  aprobar(index: number) {
    console.log(this.alumnos[index]);
    return this.alumnos[index].estado = 'aprobado';
  }

  desaprobar(index: number) {
    return this.alumnos[index].estado = 'desaprobado';
  }
}
