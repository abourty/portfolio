import { Component, OnInit } from '@angular/core';
import { StageService } from '../services/stage.service';
import { stage } from "../model/stage.model";
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  tab_stg: stage[];
  
  suppStage(stg:stage){
   this.stageService.supprimerStage(stg);
    console.log("Suppression avec succes :"+stg.type);
    }
    
  
  constructor(private stageService: StageService, public authServ : AuthService ) {
    this.tab_stg = stageService.listeStage();
    }
    ngOnInit(): void {
    }
  }
  