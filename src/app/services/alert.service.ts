import { Injectable } from '@angular/core';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  isLoading = false;
  loading: HTMLIonLoadingElement ;
  elementos =[]



  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public modalCtrl:ModalController
  ) { }

  async dismissAllLoaders() {
    let topLoader = await this.loadingCtrl.getTop();
    while (topLoader) {
      if (!(await topLoader.dismiss())) {
        throw new Error('Could not dismiss the topmost loader. Aborting...');
      }
      topLoader = await this.loadingCtrl.getTop();
    }
  }

  


  async presentaLoading( message: string ){
    this.isLoading = true;
    this.loadingCtrl.create({
      message: message ? message : 'Please wait...'
    }).then(loader => {
      loader.present().then(() => {
        if (!this.isLoading) {
          loader.dismiss();
        }
      });
    });
  }
  async   loadingDissmiss2(){
    this.isLoading = false;
    this.loadingCtrl.getTop().then(loader => {
      if (loader) {
        loader.dismiss();
      }
    });
  }
  async   loadingDissmiss(){
    this.isLoading = false;
    let topLoader = await this.loadingCtrl.getTop();
    while (topLoader) {
      if (!(await topLoader.dismiss())) {
     //   throw new Error('Could not dismiss the topmost loader. Aborting...');
      }
      topLoader = await this.loadingCtrl.getTop();
    }
  }
  

  async  message(header,message){
    
    const alert = await this.alertCtrl.create({
      cssClass: 'alert-popup',
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);

}








}
