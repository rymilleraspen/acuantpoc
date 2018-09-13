export class Account {
    AccountNumber = 0;
    PatientCode = '';
    FirstName: string;
    LastName: string;
    MiddleName  = '';
    Suffix = '';
    SocialSecurityNumber: string;
    DateOfBirth: string;
    Sex =  'F';
    OfficeCode = '6309';
    RelationToGuarantor = 'S';
    Username = '';
    Country = 0;
    Line1: string;
    City: string;
    State: string;
    ZipCode: string;
    PhoneNumber = '3212121215';
    PhoneType = 'Cell';
    Extension = '';
    Email = '';
    AccountType = '$';
    Coupon = '';
    TreatmentPlan = 'NPA';
    DiagnosingProvider = '3535';
    CreateNewPerson = 'Y';
    VisitReasonId = 16;

    constructor({FirstName, LastName, Line1, City, State, DateOfBirth, ZipCode}) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Line1 = Line1;
        this.City = City;
        this.State = State;
        this.DateOfBirth = DateOfBirth;
        this.ZipCode = ZipCode;
    }
}
