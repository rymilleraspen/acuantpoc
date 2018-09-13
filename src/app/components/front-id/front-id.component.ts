import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AcuantService } from '../../services/acuant.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { mapResponseFieldsToObject } from '../../utilities/acuant';
import { Account } from '../../classes/account';

@Component({
  selector: 'app-front-id',
  templateUrl: './front-id.component.html',
  styleUrls: ['./front-id.component.css']
})
export class FrontIdComponent implements OnInit {

  constructor(private _location: Location, private _acuantService: AcuantService,
              private _router: Router,
              private _store: Store<any>) { }

  ngOnInit() {
    this._acuantService.getInstanceId();
  }

  fileUpload(event) {
    this._acuantService.postFrontImage(event)
        .then(res => this._acuantService.getClassification(), err => {
          this._router.navigate(['error']);
        })
        .then(res => this._acuantService.getResults()).then(res => {
          const fields = mapResponseFieldsToObject(res.Fields);

          console.log(fields);
          const account = new Account(fields);
          console.log(account);
          this._store.dispatch({type: '[DEMOGRAPHICS] UPDATE', payload: account });
          if (res.Fields.length > 0) {
            this._router.navigate(['']);
          } else {
            this._router.navigate(['error']);
          }
        }, err => this._router.navigate(['error']));
  }


  back() {
    this._location.back();
  }

}
