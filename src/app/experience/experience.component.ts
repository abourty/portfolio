import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  
code : number;
type: string;
duree: number;
entreprise:string;
experience: string;
  
  
  
  constructor() {
    this.code = 1;
    this.type='initiation'
    this.duree=25;
    this.entreprise='BNA kairouan';
    this.experience= 'apprendre le travaille en groupe et la vie de administratif';

    }
    ngOnInit(): void {
    }
  }