import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

myform:FormGroup;
cmt:AbstractControl;

comment:'';

  constructor(public navCtrl: NavController, public navParams: NavParams, public formbuilder:FormBuilder,public popoverCtrl: PopoverController,public emailcomposer: EmailComposer) {
 


 this.myform = formbuilder.group({
	
	cmt:['',Validators.required]

});

this.cmt = this.myform.controls['cmt'];



 }




feedback(){
	let email ={
	to: ['anus.ahmed004@gmail.com'],
	cc:[],
	bcc:[],
	attachment:[],
	body: this.comment,
	isHtml:false,
	app:'Gmail'
	}
	this.emailcomposer.open(email);
}
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }







ratewise: any;  //<- equals [(ngModel)]="ratewise" in html;

ratefilter() {

    console.log(this.ratewise);

  }


}