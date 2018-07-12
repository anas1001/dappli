import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { EmailComposer } from '@ionic-native/email-composer';
import { SMS } from '@ionic-native/sms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IndexPage } from '../pages/index/index';
import { OrderPage } from '../pages/order/order';
import { FeedbackPage } from '../pages/feedback/feedback';
import { AboutPage } from '../pages/about/about';
import { TermsPage } from '../pages/terms/terms';


@NgModule({
  declarations: [
    MyApp,
    IndexPage,
    HomePage,
    OrderPage,
    FeedbackPage,
    TermsPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IndexPage,
    HomePage,
    OrderPage,
    FeedbackPage,
    TermsPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    SMS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
