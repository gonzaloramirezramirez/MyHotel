import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-bedrooms',
  templateUrl: './bedrooms.component.html',
  styleUrls: ['./bedrooms.component.scss']
})
export class BedroomsComponent implements OnInit {

  bedrooms: any[] = [];

  constructor(
    private generalService: GeneralService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.bedrooms = this.generalService.getBedrooms();
  }

}
