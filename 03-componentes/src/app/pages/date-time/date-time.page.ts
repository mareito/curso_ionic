import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci:Date = new Date();
  customPickerOptions = {
    buttons: [
      {
        text:'Aceptar',
        handler: (event) =>{
          this.construirFecha(event);
        }
      },
      {
        text: 'Cancelar'
      }
    ]
  }
  constructor() { }

  ngOnInit() {
  }

  cambioFecha($event){
    console.log($event)
    console.log(new Date($event.detail.value));
  }

  construirFecha(fechaPicker:any){
    const fecha = new Date(fechaPicker.year.value, 
      fechaPicker.month.value-1, fechaPicker.day.value);
    console.log(fecha);
  }

}
