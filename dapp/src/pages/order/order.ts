import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController   } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { SMS } from '@ionic-native/sms';
/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

order:FormGroup;
address:AbstractControl;
quantity:AbstractControl;
yname:AbstractControl;
pphone:AbstractControl;

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  public formbuilder:FormBuilder,
  public popoverCtrl: PopoverController,private sms: SMS) {


this.order = formbuilder.group({
	
	address:['',Validators.required],
quantity:['',Validators.required],
  yname:['',Validators.required],
    pphone:['',Validators.required]
});

this.address = this.order.controls['address'];
this.quantity = this.order.controls['quantity'];
this.yname = this.order.controls['yname'];
this.pphone = this.order.controls['pphone'];
  }

ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }




filtermilkwise: any;  //<- equals [(ngModel)]="filtermilkwise" in html;

milkfilter() {

    console.log(this.filtermilkwise);

  }


  filterzonewise: any;  //<- equals [(ngModel)]="filterzonewise" in html;
price ="30";
zonefilter() {
    console.log(this.filterzonewise);

  }
 


msg(){
var option:{
  replaceLineBreaks:true,
  android:{
  intent:'INTENT'
  }
}
this.sms.send('03313199190', 'Message', option).then(()=>{
  console.log('sms worked');
}).catch((err)=>{
  alert(JSON.stringify(err))
});
}
 

}
