import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  constructor(
    private generalService: GeneralService,
    private router: Router
  ){

  }

  ngOnInit() {
    this.LoadData();
  }

  name = new FormControl('');

  Form = new FormGroup({
    name : new FormControl('', Validators.required),
  });

  myForm = new FormGroup({
    roomType : new FormControl(''),
    checkIn : new FormControl(''),
    checkOut : new FormControl('')
  });

  updateName() {
    this.name.setValue('Nancy');
  }

  onSubmit() {
    //Use EventEmitter with form value
    console.warn(this.myForm.value);
    this.updateName();
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
