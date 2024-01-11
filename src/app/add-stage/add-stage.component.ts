import { Component, OnInit } from '@angular/core';
import { stage } from '../model/stage.model';
import { StageService } from '../services/stage.service';


@Component({
  selector: 'app-add-stage',
  templateUrl: './add-stage.component.html',
  styleUrls: ['./add-stage.component.css']
})
export class AddStageComponent implements OnInit {
  newStage= new stage();
 
   constructor( private stageService: StageService ){ }
  addStage(){
 this.stageService.ajouterStage(this.newStage);
  
  }
  ngOnInit(): void {
  
  }
  }
