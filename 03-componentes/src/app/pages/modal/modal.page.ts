import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      showBackdrop: true 
    });

    await modal.present();
    const resp = await modal.onWillDismiss();
    console.log(resp);
  }

  async mostrarModalArgumentos(){
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Mario Ramos',
        pais: 'Colombia'
      },
      showBackdrop: true 
    });

    await modal.present();
    const resp = await modal.onWillDismiss();
    console.log(resp);
  }

}
