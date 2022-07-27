import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id:any;
  public viewDatas = <any>[];
  data:any = [];

  constructor(private ds:DataService,private route:ActivatedRoute,private router:Router) {
    this.id = this.route.snapshot.params
    console.log(this.id.id);
   }

  ngOnInit(): void {
    this.viewDatas = this.ds.getDatabyId(this.id.id)
    console.log(this.viewDatas);
    this.data.push(this.ds.viewData)
    // console.log(this.data); 
  }
}
