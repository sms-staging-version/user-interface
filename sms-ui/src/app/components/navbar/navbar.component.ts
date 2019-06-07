import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/sms-client/dto/User';
import { CognitoService } from 'src/app/services/cognito.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  email: string;
  fullAccess = false;

  constructor(private router: Router, private cognito: CognitoService, private http: HttpClient) { }
  public user: User;

  showSurveyPage() {
    this.router.navigateByUrl('/surveyList');
  }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.email = localStorage.getItem('userEmail');
    this.user = JSON.parse(localStorage.getItem('user'));
    const roles = localStorage.getItem('role');
    if (roles.includes('admins') || roles.includes('staging-manager') || roles.includes('trainer')) {
      this.fullAccess = true;
    }
  }
  logout() {
    localStorage.clear();
    this.cognito.logout().then(data => {
      console.log(data);
    });
  }
}
