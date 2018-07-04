import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { AlertController } from 'ionic-angular';


import arr from  '../../app/array';

/**
 * Generated class for the SignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html',
})
export class SignPage {

  loginArray=arr;

  Username;
  Password;
  

  constructor(public navCtrl: NavController, public navParams: NavParams , public alertCtrl: AlertController) {
  }

 

  Register() {
    
    if(this.Username != undefined  &&  this.Password != undefined){


      let object = new Registration(this.Username,this.Password);
      arr.push(object) ;
      console.log(arr);
    }

    else{
      const alert = this.alertCtrl.create({
        title: 'Confirmation.',
        subTitle: 'Please enter the correct Password and Username',
        buttons: ['OK']
      });
      alert.present();


    }
    
   
    
  }
}



export class Registration {

  Username;
  Password;
  

  constructor(Username,Password){
    this.Username=Username;
    this.Password=Password;
    
  

  }
}
