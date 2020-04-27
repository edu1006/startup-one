import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AccountPage } from '../pages/account/account';
import { AppliedJobsPage } from '../pages/appliedJobs/appliedJobs';
import { BasicinfoPage } from '../pages/basicinfo/basicinfo';
import { CompanyinfoPage } from '../pages/companyinfo/companyinfo';
import { ConditionsPage } from '../pages/conditions/conditions';
import { ConversationsPage } from '../pages/conversations/conversations';
import { ExperiencePage } from '../pages/experience/experience';
import { HomePage } from '../pages/home/home';
import { JobdetailsPage } from '../pages/jobdetails/jobdetails';
import { LocationsearchPage } from '../pages/locationsearch/locationsearch';
import { MessagesPage } from '../pages/messages/messages';
import { NotificationPage } from '../pages/notification/notification';
import { PasswordPage } from '../pages/password/password';
import { ResumesentPage } from '../pages/resumesent/resumesent';
import { SavedJobsPage } from '../pages/savedJobs/savedJobs';
import { SendresumePage } from '../pages/sendresume/sendresume';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { SkillsPage } from '../pages/skills/skills';
import { TabsPage } from '../pages/tabs/tabs';
import { UpdateresumePage } from '../pages/updateresume/updateresume';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,  
    AccountPage,
    AppliedJobsPage,
    BasicinfoPage,
    CompanyinfoPage,
    ConditionsPage,
    ConversationsPage,   
    ExperiencePage,   
    HomePage,
    JobdetailsPage,
    LocationsearchPage,
    MessagesPage,
    NotificationPage,
    PasswordPage,
    ResumesentPage,
    SavedJobsPage,
    SendresumePage,
    SigninPage,
    SignupPage,
    SkillsPage,
    TabsPage,
    UpdateresumePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    AppliedJobsPage,
    BasicinfoPage,
    CompanyinfoPage,
    ConditionsPage,
    ConversationsPage, 
    ExperiencePage, 
    HomePage,
    JobdetailsPage,
    LocationsearchPage,
    MessagesPage,
    NotificationPage,
    PasswordPage,
    ResumesentPage,
    SavedJobsPage,
    SendresumePage,
    SigninPage,
    SignupPage,
    SkillsPage,
    TabsPage,
    UpdateresumePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
