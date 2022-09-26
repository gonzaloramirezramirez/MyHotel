import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  roomType: number = 0;
  room: string = '';
  checkIn: string = '';
  checkOut: string = '';
  colorSelected: any;

  myForm = new FormGroup({
    first : new FormControl(''),
    last : new FormControl(''),
    email : new FormControl(''),
    color : new FormControl(''),
    obs : new FormControl('')
    
  });

  constructor(
    private generalService: GeneralService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){

  }

  ngOnInit() {
    this.roomType = this.activatedRoute.snapshot.params['roomtype'];
    this.checkIn = this.generalService.DateToStringFormat(new Date(+this.activatedRoute.snapshot.params['checkin']),'MM/DD/YYYY');
    this.checkOut = this.generalService.DateToStringFormat(new Date(+this.activatedRoute.snapshot.params['checkout']),'MM/DD/YYYY');
    const types = this.generalService.getRomsType();
    this.LoadData(types);
  }

  LoadData(types: any){
    for (let i = 0; i < types.length; i++) {
      if (types[i].Id == this.roomType) {
        this.room = types[i].RoomType;
      }
    }
  }

  getColor(){
    const form = this.myForm.value;
    this.colorSelected = form.color;
    return this.colorSelected;
  }

  getValueCheckIn(){
    return this.checkIn;
  }

  getValuecheckOut(){
    return this.checkOut;
  }

  async confirmReserve(){
    const form = this.myForm.value;
    this.generalService.SentReservation(form);
    const message = "Your reservation has been sent: Thank you "+form.first;
    await alert(message);
    this.router.navigate(['/home']);
  }

}
