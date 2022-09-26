import { Injectable } from '@angular/core';
import { MyHotel, SystemConfig } from '@shared/const/myhotel.const';
import { BehaviorSubject, map, timeout } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bedroom, Reserve, RoomType } from '../shared/interfaces/myhotel.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const TOKEN_KEY = 'my-token';

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

const bedrooms: Bedroom[] = [{
  ID: 1,
  Name: 'King Room',
  Price: 80,
  Position: 'CEO',
  Picture: 'images/employees/01.png',
  BirthDate: '1964/03/16',
  HireDate: '1995/01/15',
  Notes: 'King Room has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
  Address: '351 S Hill St.',
}, {
  ID: 2,
  Name: 'Twin Room',
  Price: 70,
  Position: 'Sales Assistant',
  Picture: 'images/employees/09.png',
  BirthDate: '1981/06/03',
  HireDate: '2012/05/14',
  Notes: 'Twin Room loves to sell. She has been selling DevAV products since 2012. \r\n\r\nOlivia was homecoming queen in high school. She is expecting her first child in 6 months. Good Luck Olivia.',
  Address: '807 W Paseo Del Mar',
}, {
  ID: 4,
  Name: 'Double-Double Room',
  Price: 100,
  Position: 'CMO',
  Picture: 'images/employees/03.png',
  BirthDate: '1974/09/07',
  HireDate: '2002/11/08',
  Notes: 'Double-Double Room was recently voted the CMO of the year by CMO Magazine. He is a proud member of the DevAV Management Team.\r\n\r\nRobert is a championship BBQ chef, so when you get the chance ask him for his secret recipe.',
  Address: '4 Westmoreland Pl.',
}, {
  ID: 5,
  Name: 'Quad Room',
  Price: 90,
  Position: 'HR Manager',
  Picture: 'images/employees/04.png',
  BirthDate: '1977/11/22',
  HireDate: '1998/04/23',
  Notes: "Quad Room has been DevAV's HR Manager since 2003. She joined DevAV from Sonee Corp.\r\n\r\nGreta is currently training for the NYC marathon. Her best marathon time is 4 hours. Go Greta.",
  Address: '1700 S Grandview Dr.',
}, {
  ID: 6,
  Name: 'Twin Room',
  Price: 30,
  Position: 'IT Manager',
  Picture: 'images/employees/05.png',
  BirthDate: '1968/12/01',
  HireDate: '2009/03/06',
  Notes: 'Twin Room came to DevAv from Microsoft and has led our IT department since 2012.\r\n\r\nWhen he is not working hard for DevAV, he coaches Little League (he was a high school pitcher).',
  Address: '1120 Old Mill Rd.',
}, {
  ID: 7,
  Name: 'Single Room',
  Price: 60,
  Position: 'Controller',
  Picture: 'images/employees/06.png',
  BirthDate: '1974/11/15',
  HireDate: '2005/05/11',
  Notes: "Single Room is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.",
  Address: '4600 N Virginia Rd.',
}, {
  ID: 10,
  Name: 'Quad Room',
  Price: 80,
  Position: 'Shipping Manager',
  Picture: 'images/employees/07.png',
  BirthDate: '1978/01/09',
  HireDate: '2009/08/11',
  Notes: 'Quad Room is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing pick-up games.',
  Address: '424 N Main St.',
}, {
  ID: 11,
  Name: 'Twin Room',
  Price: 70,
  Position: 'HR Assistant',
  Picture: 'images/employees/08.png',
  BirthDate: '1985/06/05',
  HireDate: '2008/03/24',
  Notes: 'Cindy joined us in 2008 and has been in the HR department for 2 years. \r\n\r\nShe was recently awarded employee of the month. Way to go Cindy!',
  Address: '2211 Bonita Dr.',
}, {
  ID: 30,
  Name: 'Triple Room',
  Price: 150,
  Position: 'Ombudsman',
  Picture: 'images/employees/02.png',
  BirthDate: '1972/09/11',
  HireDate: '2009/04/22',
  Notes: 'As our ombudsman, Triple Room is on the front-lines solving customer problems and helping our partners address issues out in the field.    He is a classically trained musician and is a member of the Chamber Orchestra.',
  Address: '12100 Mora Dr',
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

  getBedrooms(): Bedroom[] {
    return bedrooms;
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
