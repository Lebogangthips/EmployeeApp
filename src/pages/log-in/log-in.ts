import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import arr from  '../../app/array';

import { AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';

/**
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {

  loginArray=arr;

 Username:string;
 Password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }

  
  LogIn(){

    for (var index = 0;  index < arr.length; index++) {

    
    
      if (this.loginArray[index].Username ==this.Username && this.loginArray[index].Password == this.Password) {
      
      console.log(this.loginArray[0].Username)
      console.log(this.Username);

      this.navCtrl.push(HomePage);
    }
    
    
    else{
      const alert = this.alertCtrl.create({
        title: 'Confirmation.',
        subTitle: 'Username and Password do not MATCH',
        buttons: ['OK']
      });
      alert.present();


    }
        
      }
      
    }

    
  }

