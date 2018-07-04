import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {LogInPage} from '../../pages/log-in/log-in';

import { AlertController } from 'ionic-angular';
import { EmployeeObject } from '../../app/object';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  Name;
  Surname;
  IdentityNumber;
  Role;
  Image;
 
 
  arr=[];


  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

//LogIn=function(){

  //this.navCtrl.push(LogInPage);
//}


add(){
  
  var temps = this.Image.replace("fakepath", " ");
    var temp = temps.split(" ", 2)
    var str = temp[1];
    str = str.substring(1,str.length);
     var url = "../../assets/imgs/" + str;
  
  
  let Lebo= new Employee(this.Name,this.Surname,this.IdentityNumber,this.Role,url);
   
  this.arr.push(Lebo);
  console.log(this.arr);

  
}

Delete(i){
   this.arr.splice(i,1);
}

Update(i){
 
  const prompt = this.alertCtrl.create({
    title: 'Login',
    message: "Enter a name for this new album you're so keen on adding",
    inputs: [
      {
        name: 'Name',
        placeholder: 'Name'
      },


      {
        name: 'Surname',
        placeholder: 'Surname'
      },

      {
        name: 'IdentityNumber',
        placeholder: 'Identity Number'
      },

      {
        name: 'Role',
        placeholder: 'Role'
      },

      {
        name: 'Image',
        type:'file'
      
      },

      
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {


          var temps = data.Image.replace("fakepath", " ");
    var temp = temps.split(" ", 2)
    var str = temp[1];
    str = str.substring(1,str.length);
     var url = "../../assets/imgs/" + str;


          let object=new EmployeeObject (data.Name,data.Surname,data.IdentityNumber,data.Role,url);

          this.arr.splice(i,1,object);
         
        }
      }
    ]
  });
  prompt.present();
}


}



export class Employee {


  Name;
  Surname;
  IdentityNumber;
  Role;
  Image;
  
 



  constructor(Name,Surname,IdentityNumber,Role,Image) {
    
    this.Name=Name;
    this.Surname=Surname;
    this.IdentityNumber=IdentityNumber;
    this.Role=Role;
    this.Image=Image;
  

  }
}


