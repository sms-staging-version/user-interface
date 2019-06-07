import { Component, OnInit } from '@angular/core';
import { CognitoService } from 'src/app/services/cognito.service';
import { User } from 'src/app/sms-client/dto/User';
import { UsersClientService } from 'src/app/sms-client/clients/users-client.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { userInfo } from 'os';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  private currentUserSubscription: Subscription;
  currentUser: User;
  
  constructor(private userClient: UsersClientService,  private cognito: CognitoService, private router: Router) { }

  private firstName: string;
  private lastName: string;
  private uEmail: string;
  private phoneNumber: string;


  ngOnInit() {
    this.currentUserSubscription = this.cognito.currentUser$.subscribe(user => {
      this.userClient.findByEmail(user.email).subscribe(
        succResp => {
          this.currentUser = succResp;
          localStorage.setItem('userEmail', this.currentUser.email);
          console.log(localStorage.getItem('userEmail'));
        },
        err => {
        }
      );
    });
  }

  returnUserInfo(): User {
    return this.currentUser;
  }

  userRegistration() {

    
// tslint:disable-next-line: whitespace
    if(this.uEmail === (this.currentUser.email)){
      this.currentUser.firstName = this.firstName;
      this.currentUser.lastName = this.lastName;
      this.currentUser.phoneNumber = this.phoneNumber;

      this.userClient.updateUser(this.currentUser).subscribe(data => {
     
      });
     
      this.router.navigateByUrl('/home');
      
       
      
    }

}





}

