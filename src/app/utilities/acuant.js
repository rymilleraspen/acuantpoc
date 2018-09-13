import * as moment from 'moment';


function processDate(date) {
    date = date.replace('Date', '');
    date = date.replace(')', '');
    date = date.replace('(', '');
    date = date.split('/').join('');
    date = date.split('+')[0];
    return parseInt(date);
  }
function formatFieldName(field) {
    switch (field.Name.toLowerCase()) {
        case 'address city':
          return {...field, Name: 'City'};
        case 'address line 1':
          return {...field, Name: 'Line1'};
        case 'address postal code':
          return {...field, Name: 'ZipCode'};
        case 'address state':
          return {...field, Name: 'State'};
        case 'birth date':
          return {...field, Name: 'DateOfBirth'};
        case 'surname':
          return {... field, Name: 'LastName'};
        case 'first name':
          return {... field, Name: 'FirstName'};
        default:
          return field;
      }
  }
export function mapResponseFieldsToObject(fields) {
    const dataObject = {};

    fields.map(v => formatFieldName(v)).map(field => {
      if (field.Name.toLowerCase() === 'dateofbirth') {
        dataObject[field.Name] = moment(processDate(field.Value)).utc().format('MM-DD-YYYY');
      } else if (field.Name.toLowerCase() === 'zipcode') {
        const zip = (field.Value) ? field.Value.split('-')[0] : '';
        dataObject[field.Name] = zip;
      } else {
        dataObject[field.Name] = field.Value;
      }
    });

    return dataObject;

  }