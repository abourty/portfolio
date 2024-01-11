import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { type } from '../model/type.model';
import { TypeService } from '../services/type.service';

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styleUrls: ['./update-type.component.css']
})
export class UpdateTypeComponent implements OnInit {
  typeCourant = new type();

  constructor(private activatedRoute: ActivatedRoute, private typeService: TypeService)  { }
 
  modifType(){
    this.typeService.modifierType(this.typeCourant);
     console.log("type modifié avec succes : "+
    this.typeCourant.typeStg+":");
    }
  ngOnInit(): void {
    this.typeCourant = this.typeService.consulterType
(this.activatedRoute.snapshot.params['id']);
console.log("Code type à modifier "+this.typeCourant.codet);
  }

}
