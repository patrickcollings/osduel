import { Component, OnInit, NgModule } from '@angular/core';
import { DataService } from '../../services/data.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = "Add User Here";

  get updatedDate () {
    return this.dataService.lastUpdate;
  }

  get league () {
    return this.dataService.league;
  }


  constructor(private dataService:DataService) {    
  }

 
  
  ngOnInit() {
    this.dataService.createLeague();
    this.dataService.getLastUpdate();
  }

  updateLeague() {
    // Update the league
    this.dataService.updateLeague();
    this.dataService.setLastUpdate();
  }

  addNewUser() {
    this.dataService.addUser(this.userName);
    this.dataService.setLastUpdate();
  }




}