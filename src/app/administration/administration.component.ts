import { Component, OnInit } from '@angular/core';
import { stage } from '../model/stage.model';
import { AuthService } from '../services/auth.service';
import { StageService } from '../services/stage.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  tab_stg : stage[];

  constructor( public authServ:AuthService, private stageService: StageService) { 
    this.tab_stg = stageService.listeStage() ;
  }
  ngOnInit(): void {
  }

}
