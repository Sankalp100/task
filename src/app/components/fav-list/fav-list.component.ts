import { Component, OnInit } from '@angular/core';
import { ListService } from '../table/list.service';
import { list } from '../table/list';


@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css']
})
export class FavListComponent implements OnInit {

  banks: list[];
  config: any;
  star: any = [];
  star_fav: any = [];
  filtertext: any;
  constructor(private listService: ListService) { }

  ngOnInit() {
    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      totalItems: this.banks
    };
    this.star = localStorage.getItem("fav").split(",");
    console.log((this.star))
    this.star.map((v, i) => {
      console.log(v)
      this.star_fav[v] = 1;
      // console.log(i)
    })
    this.banks = JSON.parse(localStorage.getItem("data"))
    console.log(this.banks)
  }
  fav(id, value, data) {
    console.log(value)
    let fav = localStorage.getItem('fav');
    var favouriteData = JSON.parse(localStorage.getItem("data"))

    if (value == 1) {
      favouriteData.push(data)
      console.log(favouriteData)
      fav += "," + id;
      localStorage.setItem("fav", fav)
      localStorage.setItem("data", JSON.stringify(favouriteData))
    }
    else {
      this.star = localStorage.getItem("fav").split(",");
      var favouriteData = JSON.parse(localStorage.getItem("data"))
      this.star_fav[id] = "0";
      this.star.map((v, i) => {
        if (v == id) {
          console.log("delete")
          favouriteData.splice(i - 1, 1);
          this.star.splice(i, 1);
        }
      })
      localStorage.setItem("fav", this.star.toString())
      localStorage.setItem("data", JSON.stringify(favouriteData))
      this.banks = favouriteData;
    }
    this.star = localStorage.getItem("fav").split(",");
    console.log((this.star))
    this.star.map((v, i) => {
      console.log(v)
      this.star_fav[v] = 1;
    })
    console.log(this.star_fav)
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }

}
