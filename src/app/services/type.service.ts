import { Injectable } from '@angular/core';
import { type } from '../model/type.model';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  type! :type;
  ajouterType(type: type) {
    this.tab_type.push(type);
    console.log("ajout avec succes :" +type.typeStg);
  }
  supprimerType(type: type){
    const index = this.tab_type.indexOf(type, 0);
    if (index > -1) {
    this.tab_type.splice(index, 1);
    }
   }
  consulterType(id:number): type{
    this.type = this.tab_type.find(type => type.codet == id)!;
    return this.type;
    }
 modifierType(type: type) {
      this.supprimerType(type);
      this.ajouterType(type);
      }
  
  tab_type : type[];
  

  constructor() { 
    this.tab_type=[
      {codet:1, typeStg : "Stage d'initiation"},
      {codet:2, typeStg : "Stage perfectionnement"},
      {codet:3, typeStg : "Stage PFE"}


    ]
  }
  listeType():type[] {
    return this.tab_type;
    }

  
}
