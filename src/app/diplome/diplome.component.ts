import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diplome',
  templateUrl: './diplome.component.html',
  styleUrls: ['./diplome.component.css']
})
export class DiplomeComponent implements OnInit {

Lycee:string;
date1:string;
diplome1 :string;
Institut:string;
date2:string;
diplome2:string;

  constructor() { 
this.Lycee="Ali zouaoui hajeb laayoun";
this.date1="2021-2022";
this.diplome1="baccalauréat sciences expérimentales";
this.Institut="institut supérieure des études technologique de nabeul";
this.date2="2022-2024";
this.diplome2="licence en technologie d'informatique";




  }




  ngOnInit(): void {
  }

}
