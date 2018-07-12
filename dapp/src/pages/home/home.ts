import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderPage } from '../order/order';
import { FeedbackPage } from '../feedback/feedback';
import { AboutPage } from '../about/about';
import { TermsPage } from '../terms/terms';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  order(){
  this.navCtrl.push(OrderPage)
  }

  feedback(){
  this.navCtrl.push(FeedbackPage)
  }

      about(){
  this.navCtrl.push(AboutPage)
  }

  term(){
  this.navCtrl.push(TermsPage)
  }



slides2 = [
    {
      title: "Welcome to the Docs!",
      description: "The Ionic Component Documentation showcases a number of useful components that are included out of the box with Ionic.",
    },
    {
      title: "Welcome to the Docs!",
      description: "The Ionic Component Documentation showcases a number of useful components that are included out of the box with Ionic.",
    },
    {
      title: "Welcome to the Docs!",
      description: "The Ionic Component Documentation showcases a number of useful components that are included out of the box with Ionic.",
    }
  ];

}
