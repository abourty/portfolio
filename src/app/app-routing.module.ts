import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoncvComponent } from './moncv/moncv.component';
import { ConnectComponent } from './connect/connect.component';
import { ExperienceComponent } from './experience/experience.component';
import { InfogeneraleComponent } from './infogenerale/infogenerale.component';
import { CompetenceComponent } from './competence/competence.component';
import { DiplomeComponent } from './diplome/diplome.component';
import { AdministrationComponent } from './administration/administration.component';
import { StageComponent } from './stage/stage.component';
import { AddStageComponent } from './add-stage/add-stage.component';
import { UpdateStageComponent } from './update-stage/update-stage.component';
import { TypeComponent } from './type/type.component';
import { UpdateTypeComponent } from './update-type/update-type.component';
import { AddTypeComponent } from './add-type/add-type.component';
import { AppComponent } from './app.component';



const routes: Routes = [
  {path : "",component:AppComponent },
 {path : "moncv",component:MoncvComponent },
  {path: "experience", component: ExperienceComponent },
  {path: "infogenerale", component: InfogeneraleComponent},
  {path: "competence", component: CompetenceComponent},
  {path: "diplome", component: DiplomeComponent},
  {path: "administration", component: AdministrationComponent},
  {path : "connect",component:ConnectComponent},
  {path : "stage",component:StageComponent},
  {path : "updateStage/:id",component:UpdateStageComponent},
  {path : "add-stage",component:AddStageComponent},
  {path : "type", component: TypeComponent},
  {path : "update-type/:id", component: UpdateTypeComponent },
  {path : "add-type", component: AddTypeComponent },

  {path: "", redirectTo: "moncv", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
