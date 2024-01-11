import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infogenerale',
  templateUrl: './infogenerale.component.html',
  styleUrls: ['./infogenerale.component.css']
})
export class InfogeneraleComponent implements OnInit {
  Qui_suis_je!:string;
  nom!: string;
  adresse!: string;
  telephone!: number;
  mail!: string;
  Permis!:string;

ngOnInit() {
  this.Qui_suis_je="J'étudie à l'Institut Supérieur d'Etudes Technologiques de Nabeul  'Technologie de l'informatique', je me suis ensuite orienté vers le développement des systèmes d'information et j'aspire à approfondir mes connaissances dans ce domaine.";
  this.nom = 'Abir Chmengui';
  this.adresse = 'hajeb laayoun,kairouan,tunisia';
  this.telephone = 58289463;
  this.mail = 'abirchmengui13@gmail.com';
  this.Permis='non';
  
}
}