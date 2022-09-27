import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-bedrooms',
  templateUrl: './bedrooms.component.html',
  styleUrls: ['./bedrooms.component.scss']
})
export class BedroomsComponent implements OnInit {

  bedrooms: any[] = [];
  searchText: string = '';

  myForm = new FormGroup({
    search : new FormControl('')
  });

  constructor(
    private generalService: GeneralService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.bedrooms = this.generalService.getBedrooms();
  }

  searchItem(value: any){
    this.searchText = value;
  }

  getValue(){
    const form = this.myForm.value;
    this.searchItem(form.search);
    return true;
  }

  confirm(){

  }

}
