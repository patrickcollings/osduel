import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService implements OnInit {

  constructor(private http: HttpClient) { 
    console.log("Data Service Connected");    
  }

  ngOnInit (): void {
    
    
  }

  getUser() {
    return this.http.get('http://localhost/osduel/request.php');
  }
}
