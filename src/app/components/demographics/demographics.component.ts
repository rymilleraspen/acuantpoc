import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AcuantService } from '../../services/acuant.service';
import { Account } from '../../classes/account';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.css']
})
export class DemographicsComponent implements OnInit {

  constructor(private _store: Store<any>, private acuantService: AcuantService) { }
  private mockId = {
    'AccountNumber': 0,
    'PatientCode': '',
    'FirstName': 'Test',
    'LastName': 'Testone',
    'MiddleName': '',
    'Suffix': '',
    'SocialSecurityNumber': '845845845',
    'DateOfBirth': '2000-01-01T05:00:00.000Z',
    'Sex': 'F',
    'OfficeCode': '6309',
    'RelationToGuarantor': 'S',
    'Username': '',
    'Country': 0,
    'Line1': '4759 N 27TH',
    'City': 'Central Square',
    'State': 'NY',
    'ZipCode': '13036',
    'PhoneNumber': '3212121215',
    'PhoneType': 'Cell',
    'Extension': '',
    'Email': '',
    'AccountType': '$',
    'Coupon': '',
    'TreatmentPlan': 'NPA',
    'DiagnosingProvider': '3535',
    'CreateNewPerson': 'Y',
    'VisitReasonId': 16
  };
  // private mockId = {
  //   "AccountNumber": 0,
  //   "PatientCode": "",
  //   "FirstName": "Test",
  //   "MiddleName": "",
  //   "LastName": "Testone",
  //   "Suffix": "",
  //   "SocialSecurityNumber": "845845845",
  //   "DateOfBirth": "2000-01-01T05:00:00.000Z",
  //   "Sex": "M",
  //   "OfficeCode": "6309",
  //   "RelationToGuarantor": "S",
  //   "Username": "",
  //   "Country": 0,
  //   "Line1": "1111 Test Street",
  //   "City": "Central Square",
  //   "State": "NY",
  //   "ZipCode": "13036",
  //   "PhoneNumber": "3212121215",
  //   "PhoneType": "Cell",
  //   "Extension": "",
  //   "Email": "test@test.com",
  //   "AccountType": "$",
  //   "Coupon": "",
  //   "TreatmentPlan": "NPA",
  //   "DiagnosingProvider": "3535",
  //   "CreateNewPerson": "Y",
  //   "VisitReasonId": 16
  // }
  demographics = {};
  ssn = '';
  ngOnInit() {
    this._store.select('demographics').subscribe(res => {
      this.demographics = res;
    });

    const app = new Account(this.mockId);
    console.log(app);
  }

  createAccount() {

    console.log('creating account');
    // @ts-ignore
    // this.demographics.SocialSecurityNumber = this.ssn;
    this.acuantService.createAccount(this.demographics).subscribe(res => console.log(res));
  }

}
