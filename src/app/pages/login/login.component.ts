import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = new FormGroup({
    user : new FormControl(''),
    password : new FormControl('')
  });

  showButton: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private generalService: GeneralService
    ) { }


  ngOnInit() {
    //this.login();
    this.credentials = this.fb.group({
      user: ['gonzaloisc@gmail.com', [Validators.required]],
      password: ['DEMO4321', [Validators.required, Validators.minLength(8)]]
    });
  }

  async login() {
    const form = this.credentials.value;

    //Validate user and password
    if (form.user && form.password) {
      this.generalService.login(form.user,form.password);
      this.router.navigate(['/home']);
    } 
         
  }

  async onUserSet(){
    //Validate change
  }

}
