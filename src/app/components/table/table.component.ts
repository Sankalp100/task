import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { list } from './list';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  banks: list[];
  city:string="MUMBAI";
  public name = "";
  config: any;
  star:any=[];
  star_fav:any=[];
  filtertext:any;

  constructor( private listService:ListService) { }

  ngOnInit() {
    // this.listService.getData().subscribe((data: list[]) => {
    //   this.banks = data;
    // })
    console.log(!!localStorage.getItem("fav"))
    if(!!!localStorage.getItem("fav")){
      var arrayData = new Array(); 
      // arrayData.push({bank:"na",ifsc:"na"})
      localStorage.setItem("fav","0")
      localStorage.setItem("data",JSON.stringify(arrayData))
    }
    this.star = localStorage.getItem("fav").split(",");
    console.log((this.star))
    this.star.map((v,i)=> {
      console.log(v)
      this.star_fav[v] = 1;
      // console.log(i)
    })
    console.log(this.star_fav)
    this.listService.getDatabyid(this.city).subscribe((data: list[]) => {
      this.banks = data;

    })
    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      totalItems: this.banks
    };

    console.log(this.name);
  }
  select_city(e){
    console.log(this.city);
    this.listService.getDatabyid(this.city).subscribe((data: list[]) => {
      this.banks = data;
      console.log(data)
    })
  
  } 
  pageChanged(event){
    this.config.currentPage = event;
  }
 fav(id,value,data){
   console.log(value)
   let fav =localStorage.getItem('fav');
   var favouriteData = JSON.parse(localStorage.getItem("data"))
   console.log(value==='1')
   console.log(value==1)
   console.log(value=='1')
   console.log(value==0)
   if (value==1){
     favouriteData.push(data)
    console.log(favouriteData)
    fav+=","+id;
    localStorage.setItem("fav",fav)
    localStorage.setItem("data",JSON.stringify(favouriteData))
   
  }
    else{
      this.star = localStorage.getItem("fav").split(",");
      var favouriteData = JSON.parse(localStorage.getItem("data"))
      this.star_fav[id]="0";
      this.star.map((v,i)=>{
        if(v==id){
          console.log("delete")
          favouriteData.splice(i-1,1);
           this.star.splice(i,1);
        }
      })
      localStorage.setItem("fav",this.star.toString())
      localStorage.setItem("data",JSON.stringify(favouriteData))
    }
    this.star = localStorage.getItem("fav").split(",");
    console.log((this.star))
    this.star.map((v,i)=> {
      console.log(v)
      this.star_fav[v] = 1;
      // console.log(i)
    })
    console.log(this.star_fav)
 }
}
