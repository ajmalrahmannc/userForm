import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(private fb:FormBuilder) { }

  profileForm = this.fb.group({
    name:['',[Validators.required,Validators.minLength(3),Validators.pattern('[A-Za-z ]*')]],
    age:['',[Validators.required,Validators.pattern('[0-9 ]*')]],
    address:['',[Validators.required,Validators.pattern('[A-Za-z0-9 ]*')]],
    number:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9 ]*')]],
    occupation:['',[Validators.required,Validators.pattern('[A-Za-z ]*')]],
    email:['',[Validators.required,Validators.email]]
  })

  ngOnInit(): void {
  }

  submit(){
    if(this.profileForm.valid){
      alert("login successfull")
    }
    else{
      alert("invalid form")
    }
  }
}
