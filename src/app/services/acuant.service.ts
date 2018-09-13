import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import axios from 'axios';
import request from './request';

@Injectable({
  providedIn: 'root'
})
export class AcuantService {

  instanceId: string;
  constructor(private _http: HttpClient) { }
  getOptions() {
    return {
      'AuthenticationSensitivity': 0,
      'ClassificationMode': 0,
      'Device': {
          'HasContactlessChipReader': false,
          'HasMagneticStripeReader': false,
          'SerialNumber': 'xxx',
          'Type': {
              'Manufacturer': 'xxx',
              'Model': 'xxx',
              'SensorType': 3,
          }
      },
      'ImageCroppingExpectedSize': 0,
      'ImageCroppingMode': 1,
      'ManualDocumentType': null,
      'ProcessMode': 0,
      'SubscriptionId': environment.APP_SUBSCRIPTION_ID
    };
  }
  getInstanceId() {
    const options = this.getOptions();
    const AUTH_TOKEN = btoa(`${environment.APP_USER_NAME}:${environment.APP_USER_PASSWORD}`);
    const httpHeaders = {
      headers: new HttpHeaders({
        'Authorization': `${environment.APP_AUTH_METHOD} ${AUTH_TOKEN}`
      })
    };
    return this._http.post(`${environment.APP_ID_SCAN_GO_API}/AssureIDService/Document/Instance`, options, httpHeaders)
                .pipe(map(res => {
                  // @ts-ignore
                  this.instanceId = res;
                  console.log(this.instanceId);
                })).toPromise();
  }


  postFrontImage(file) {
    return request({
      url: '/AssureIDService/Document/' + this.instanceId + '/Image?side=0&light=0&metrics=true',
      method: 'POST',
      data: file
    });
  }

  getClassification() {
    return request({
      url: '/AssureIDService/Document/' + this.instanceId + '/Classification',
      method: 'GET',
    });
  }
  getResults() {
    return request({
        url: '/AssureIDService/Document/' +  this.instanceId,
        method: 'GET',
    });
  }

  createAccount(account) {


    console.log(account);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this._http.post<any>('http://localhost:37444/api/Account/create', account, httpOptions);
  }
}
