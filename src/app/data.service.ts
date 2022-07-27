import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public viewData: any;

  constructor() { }

  public data=[
    {
      id:1,
      name:'Bill Gates',
      Age:66,
      Address:'Abc Street',
      phone:7894561230,
      email:'billgates@gmail.com',
      occupation:'Co-founder of MicroSoft',
      imageUrl:'../../assets/billgates.png'
    },
    {
      id:2,
      name:'Elon Musk',
      Age:51,
      Address:'Abc Street',
      phone:7894561230,
      email:'elon@gmail.com',
      occupation:'CEO of Tesla Motors',
      imageUrl:'../../assets/elonmusk.png'
    },
    {
      id:3,
      name:'Martin Fowler',
      Age:58,
      Address:'Abc Street',
      phone:7894561230,
      email:'martin@gmail.com',
      occupation:'software Developer',
      imageUrl:'../../assets/martinflower.png'
    },    {
      id:4,
      name:'Warren Buffet',
      Age:91,
      Address:'Abc Street',
      phone:7894561230,
      email:'warren@gmail.com',
      occupation:'CEO of Berkshire Hathaway',
      imageUrl:'../../assets/warrenbaffet.png'
    }
  ]

  getData(){
    return <any> (this.data)
  }

  getDatabyId(id:any){
    this.data.forEach((item:any)=>{
      if(item.id == id){
        console.log(item);

        this.viewData = item;
        return this.viewData
        
      }
    })
  }

  // view(){
  //   return this.viewData
  // }
    
}
