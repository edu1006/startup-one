import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NotificationPage } from '../notification/notification';
import { ConditionsPage } from '../conditions/conditions';
import { SigninPage } from '../signin/signin';
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public navCtrl: NavController) {

  }

  notification(){
        this.navCtrl.push(NotificationPage)
  }
  
  conditions(){
        this.navCtrl.push(ConditionsPage)
  }
  
  signin(){
        this.navCtrl.setRoot(SigninPage)
  }

}
