import { Injectable } from '@angular/core';
import { CognitoService } from './services/cognito.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateInfoService {
  url = '';
  private cognitoService: CognitoService;
  constructor() { }

}
