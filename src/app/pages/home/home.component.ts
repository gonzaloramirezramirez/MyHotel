import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  SelectedType: number = 0;
  Typs: any[] = []; 
  Today: Date = new Date();

  constructor(
    private generalService: GeneralService,
    private router: Router
  ){

  }

  ngOnInit() {
    this.LoadData();
  }

  myForm = new FormGroup({
    roomType : new FormControl(''),
    checkIn : new FormControl(''),
    checkOut : new FormControl('')
  });

  getMinDate(){
    return this.Today;
  }

  reserve() {
    //Use EventEmitter with form value
    const form = this.myForm.value;
    this.goToReserve(form.roomType,form.checkIn,form.checkOut);
  }

  goToReserve(roomType: any,checkIn: any,checkOut: any){
    
    moment.locale('es');
    const start: number = moment(checkIn, 'MM/DD/YYYY').toDate().getTime();
    const end: number = moment(checkOut, 'MM/DD/YYYY').toDate().getTime();
    
    this.router.navigate(['/reserve',roomType.Id,start,end]);
  }

  LoadData(){
    this.Typs = this.generalService.getRomsType();
  }

  getValue(){
    const form = this.myForm.value;
    if(form.checkIn && form.checkOut && form.roomType){
      return true;
    }
    else{
      return false;
    }
  }

}
