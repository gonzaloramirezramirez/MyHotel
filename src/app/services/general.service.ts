import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Reserve, RoomType } from '../shared/interfaces/myhotel.interface';

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

}
