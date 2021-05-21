import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { TicToeComponent } from './tic-toe/tic-toe.component';

const routes: Routes = [
  {path: '', redirectTo: 'tic', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path:'blogpage',component:MainpageComponent},
  {path:'tic',component:TicToeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
