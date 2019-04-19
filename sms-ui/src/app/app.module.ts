import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLoadingComponent } from './components/auth-loading/auth-loading.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CognitoService } from './services/cognito.service';
import { SmsClientModule } from './sms-client/sms-client.module';
import { NewInterviewComponent } from './components/new-interview/new-interview.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AuthLoadingComponent,
    NewInterviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    SmsClientModule
  ],
  providers: [
    CognitoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
