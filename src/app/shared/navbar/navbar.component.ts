import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  searchItem(e: any){
    this.searchText = e.detail.value;
  }

}
