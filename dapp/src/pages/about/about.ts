import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {


  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {
  }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
