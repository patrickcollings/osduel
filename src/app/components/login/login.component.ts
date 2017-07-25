import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User;

  constructor(private dataService:DataService) {

    
   }

  ngOnInit() {
    this.dataService.getUser().subscribe((res) => this.createUser(res));
  }

  createUser(data) {
    this.users = new User(data[0], data[1], data[2]);
  }
}


export class User {
  rank:number;
  totalLevel:number;
  totalXp:number;

  constructor(rank,totalLevel,totalXp) {
    this.rank = rank;
    this.totalLevel = totalLevel;
    this.totalXp = totalXp;
  }
}
