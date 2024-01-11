import { Component, OnInit } from '@angular/core';
import { type } from '../model/type.model';
import { TypeService } from '../services/type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  tab_type : type[];
  newType = new type();

  suppType(type: type) {
    this.typeService.supprimerType(type);
    console.log("Suppression avec succes :"+type.typeStg);
   }

  constructor(private typeService: TypeService) {
    this.tab_type=typeService.listeType();
   }
   addType(){
    this.typeService.ajouterType(this.newType);
  }

  ngOnInit(): void {
  }

}
