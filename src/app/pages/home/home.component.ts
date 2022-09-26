import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    this.router.navigate(['/reserve']);
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
