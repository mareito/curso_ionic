import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre: string;
  @Input() pais: string;

  constructor(private modalCtrl:ModalController) { }
  
  ngOnInit() {
    console.log(this.nombre),
    console.log(this.pais)
  }

  salirSinArgumentos(){
    this.modalCtrl.dismiss();
  }

  salirconArgumentos(){
    this.modalCtrl.dismiss({ direccion: 'Cra 11b No 77- 44 To 1 Sp 703', municipio:'Ibague'})
  }
}
