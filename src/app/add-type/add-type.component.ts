import { Component, OnInit } from '@angular/core';
import { TypeService } from '../services/type.service';
import { type } from '../model/type.model';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {

 newType = new type();

constructor(private typeService:TypeService) { }

  addType(){
    this.typeService.ajouterType(this.newType);
  }

  ngOnInit(): void {
  }

}
