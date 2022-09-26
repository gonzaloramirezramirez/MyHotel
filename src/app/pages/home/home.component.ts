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

  

  reserve() {
    //Use EventEmitter with form value
    this.router.navigate(['/reserve']);
  }

  LoadData(){
    const typs = this.generalService.getRomsType();
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
