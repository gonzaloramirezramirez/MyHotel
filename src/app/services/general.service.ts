import { Injectable } from '@angular/core';
import { MyHotel, SystemConfig } from '@shared/const/myhotel.const';
import { BehaviorSubject, map, timeout } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reserve, RoomType } from '../shared/interfaces/myhotel.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const TOKEN_KEY = 'my-token';

const roomsType: RoomType[] = [
  {
    Id: 1,
    RoomType: "Single Room",
  },
  {
    Id: 2,
    RoomType: "Twin Room",
  },
  {
    Id: 3,
    RoomType: "Triple Room",
  },
  {
    Id: 4,
    RoomType: "Quad Room",
  },
  {
    Id: 5,
    RoomType: "Hollywood Twin Room",
  },
  {
    Id: 6,
    RoomType: "Double-Double Room",
  },
  {
    Id: 7,
    RoomType: "King Room",
  }
];

const reserves: Reserve[] = [
{
  Id: 1,
  Assigned: 'Mr. John Heart',
  Subject: 'Choose between PPO and HMO Health Plan',
}, {
  Id: 2,
  Assigned: 'Mr. John Heart',
  Subject: 'Google AdWords Strategy',
}, {
  Id: 3,
  Assigned: 'Mr. John Heart',
  Subject: 'New Brochures',
}, {
  Id: 4,
  Assigned: 'Mr. John Heart',
  Subject: 'Update NDA Agreement',
}, {
  Id: 5,
  Assigned: 'Mr. John Heart',
  Subject: 'Review Product Recall Report by Engineering Team',
}, {
  Id: 6,
  Assigned: 'Mrs. Olivia Peyton',
  Subject: 'Update Personnel Files',
}, {
  Id: 7,
  Assigned: 'Mrs. Olivia Peyton',
  Subject: 'Review Health Insurance Options Under the Affordable Care Act',
}, {
  Id: 8,
  Assigned: 'Mrs. Olivia Peyton',
  Subject: 'Non-Compete Agreements',
}, {
  Id: 9,
  Assigned: 'Mrs. Olivia Peyton',
  Subject: 'Give Final Approval for Refunds',
}, {
  Id: 10,
  Assigned: 'Mr. Robert Reagan',
  Subject: 'Deliver R&D Plans for 2013',
}];

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  //isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token = '';
  private userInfo: any;
  headers: any;

  constructor(
    //private http: HttpClient
  ) { 
    
  }

  getReserves(): Reserve[] {
    return reserves;
  }

  getRomsType(): RoomType[] {
    return roomsType;
  }

  login(user: string, password: string): Boolean {


    const data =  {'User': user, 'Password': password};
    /*
    const res = this.http.post(environment.baseurl + ServiceEndPoints.login, data , { headers: headers})
        .pipe(
          tap(_ => {
          this.isAuthenticated.next(true);
        }),
        timeout(LoginConfig.loginTimeOut));
        
    return  res;*/

    return true;
    
  }

  SentReservation(data: any){
    /*
    this.setDataHeaders();
    return this.http.post(environment.baseurl
        + MyHotel.services.SentReservationRQ, data, { headers: this.headers })
        .pipe(
            map((response: any) => response),
            timeout(SystemConfig.timeOut)
        );*/
      return true;
  }

  setDataHeaders(headers = {}) {
    this.headers = {
      ...{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.userInfo.BearerToken.toString()
      },
      ...headers
    };

    this.headers = new HttpHeaders(this.headers);
  }

  DateToStringFormat(inDate: Date, formatString: string) {

    if (!this.isValidDate(inDate)) {
      inDate = new Date(inDate);
    }

    const isM = formatString.includes('a');

    const dateObject = this.getDateObj(inDate, isM);

    const dateMatchRegex = this.joinObj(dateObject, '+|') + '+';
    const regEx = new RegExp(dateMatchRegex, 'g');
    let tokenLength;
    formatString = formatString.replace(regEx, function(formatToken) {
      const datePartValue = dateObject[formatToken.slice(-1)];
      tokenLength = formatToken.length;

      if (formatToken.indexOf('y') < 0 && formatToken.indexOf('Y') < 0) {
        // Expand single digit format token 'd' to multi digit value '10' when needed
        tokenLength = Math.max(formatToken.length, datePartValue.toString().length);
      }
      const zeroPad = (datePartValue.toString().length < formatToken.length ? '0'.repeat(tokenLength) : '');
      return (zeroPad + datePartValue).slice(-tokenLength);
    });

    return formatString;
  }

  getDateObj(inDate: Date, meridian = false): any {
    const hour = inDate.getHours();
    return {
      M: inDate.getMonth() + 1,
      d: inDate.getDate(),
      D: inDate.getDate(),
      h: meridian && hour > 12 ? hour - 12 : hour,
      m: inDate.getMinutes(),
      s: inDate.getSeconds(),
      y: inDate.getFullYear(),
      Y: inDate.getFullYear(),
      a: meridian ? (hour >= 12 ? 'PM' : 'AM') : null,
    };
  }

  isValidDate(input: any) {
    return typeof input.getMonth === 'function';
  }

  joinObj(obj: any, seperator:any) {
    /*const out = [];
    for (k in obj) {
      out.push(k);
    }*/
    const out = Object.keys(obj);
    return out.join(seperator);
  }

}
