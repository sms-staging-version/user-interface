import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { CognitoService } from '../cognito.service';
//Router Guard citation: https://codeburst.io/using-angular-route-guard-for-securing-routes-eabf5b86b4d1

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private cognito: CognitoService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.cognito.localStorage.length) {
        return true;
    }
    this.router.navigate(['/login']); 
    return false;
  }

}