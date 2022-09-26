import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReserveComponent } from './pages/reserve/reserve.component';
import { BedroomsComponent } from './pages/bedrooms/bedrooms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarModule } from '@shared/navbar/navbar.module';

const appRoutes:Routes=[
  { path: '', redirectTo:'/login', pathMatch:'full'},
  { path: 'login', component:LoginComponent},
  { path: 'home', component:HomeComponent},
  { path: 'reserve', component:ReserveComponent},
  { path: 'bedrooms', component:BedroomsComponent},
  { path: '**', redirectTo:'/home', pathMatch:'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ReserveComponent,
    BedroomsComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
