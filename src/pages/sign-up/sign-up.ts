import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import arr from  '../../app/array';
import { AlertController } from 'ionic-angular';

import  {LogInPage} from '../../pages/log-in/log-in';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  Username;
  Password;
  constructor(public navCtrl: NavController, public navParams: NavParams , public alertCtrl: AlertController) {
  }

  

  Register() {
    
    if(this.Username != undefined  &&  this.Password != undefined){


      let object = new Registration(this.Username,this.Password);
      arr.push(object) ;
      console.log(arr);

      this.navCtrl.push(LogInPage)
    }

    else{
      const alert = this.alertCtrl.create({
        title: 'Confirmation.',
        subTitle: 'Please enter a Password and a Username',
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
