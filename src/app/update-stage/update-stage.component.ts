import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stage } from '../model/stage.model';
import { StageService } from '../services/stage.service';

@Component({
  selector: 'app-update-stage',
  templateUrl: './update-stage.component.html',
  styleUrls: ['./update-stage.component.css']
})
export class UpdateStageComponent implements OnInit {
  stageCourant = new stage();
 
  constructor(private activatedRoute: ActivatedRoute,  private stageService: StageService) { }

    modifStage(){
    this.stageService.modifierStage(this.stageCourant);
    console.log("Stage modifié avec succes : "+
    this.stageCourant.type+":"+this.stageCourant.entreprise+"duree="+
    this.stageCourant.duree+", commence le "+this.stageCourant.dateDebut);
    }
    ngOnInit(): void {
    this.stageCourant = this.stageService.consulterStage
    (this.activatedRoute.snapshot.params['id']);
    console.log("Code stage à modifier "+this.stageCourant.code);
    }
    }