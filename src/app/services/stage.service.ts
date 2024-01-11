import { Injectable } from '@angular/core';
import { stage } from '../model/stage.model';

@Injectable({
providedIn: 'root'
})
export class StageService {
  stage!: stage;
  tab_stg : stage[]
  ajouterStage(stg: stage){
    this.tab_stg.push(stg);
    console.log("Ajout avec succes : "+stg.type);
    }
    supprimerStage(stg: stage){
      const index = this.tab_stg.indexOf(stg, 0);
      if (index > -1) {
      this.tab_stg.splice(index, 1);
      }
      }
    





constructor() {
 
    this.tab_stg = [
      {code: 1, type : "initiation", duree : 25, entreprise: "BNA kairouan" , dateDebut : new Date("09/01/2021")},
      {code : 2,type : "perfectionnement", duree : 25, entreprise:"ETC Tunisie", dateDebut : new Date("09/30/2022") },

      ];


}

 
listeStage():stage[] {
return this.tab_stg;
}
consulterStage(id:number): stage{
  this.stage = this.tab_stg.find(stg => stg.code == id)!;
  return this.stage;
  }
  modifierStage(stg: stage) {
  this.supprimerStage(stg);
  this.ajouterStage(stg);

  }
}
