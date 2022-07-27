import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public viewData=<any>[];

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
    this.viewData = this.ds.getData();
    console.log(this.viewData);
  }

  view(id:any){
    console.log(id);
    this.router.navigate(['view',id])
  }



}
