import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit (): void {}

  public league = [];
  public lastUpdate: string;

  createLeague() {
    var url = 'http://localhost/osduel/request.php';
    this.http.get(url).subscribe(res => {
        // TODO Error check that response is correct from servers
      
        // Convert response to array
        var sortable = [];
        for (var user in res) {
          sortable.push([user, res[user]]);
        }
        this.league = sortable;
        this.sortLeague();
      }
    );
  }

  updateLeague() {
    // Get names of all users in league
    var names = [];
    for (var user of this.league) {
      names.push(user[0]);
    }
    var length = names.length;
    console.log(length);

    // Loop through and update each user
    names.forEach((name, index) => {
      var url = 'http://localhost/osduel/update.php?name=' + name;
      this.http.get(url).subscribe(res => { 

        // If final key has gotten a response then update league with new values
        if (index == length - 1){
          this.createLeague();
        }

      });
    });
    
  }

  getLastUpdate() {
    var url = 'http://localhost/osduel/getdate.php';
    this.http.get(url).subscribe(res => {
        this.lastUpdate = res[0];
      }
    );
  }

  setLastUpdate() {
    var url = 'http://localhost/osduel/setdate.php';
    this.http.get(url).subscribe(res => {
      this.getLastUpdate();
    });
  }

  addUser(name) {
    var url = 'http://localhost/osduel/initialise.php?name=' + name;
    this.http.get(url).subscribe(res => {
        this.updateLeague();
      }
    );
  }

  sortLeague() {
    this.league = this.league.sort((n1, n2) => {
      return n2[1] - n1[1];
    });
  }


}
