import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoncvComponent } from './moncv/moncv.component';
import { MenuComponent } from './menu/menu.component';
import { InfogeneraleComponent } from './infogenerale/infogenerale.component';
import { CompetenceComponent } from './competence/competence.component';
import { DiplomeComponent } from './diplome/diplome.component';
import { StageComponent } from './stage/stage.component';
import { AdministrationComponent } from './administration/administration.component';
import { ConnectComponent } from './connect/connect.component';
import { ExperienceComponent } from './experience/experience.component';
import { UpdateStageComponent } from './update-stage/update-stage.component';
import { AddStageComponent } from './add-stage/add-stage.component';
import { TypeComponent } from './type/type.component';
import { UpdateTypeComponent } from './update-type/update-type.component';
import { AddTypeComponent } from './add-type/add-type.component';


@NgModule({
  declarations: [
    AppComponent,
   MoncvComponent,
   MenuComponent,
    InfogeneraleComponent,
    CompetenceComponent,
    DiplomeComponent,
    StageComponent,
    AdministrationComponent,
    MoncvComponent,
    ConnectComponent,
    ExperienceComponent,
    UpdateStageComponent,
    AddStageComponent,
    TypeComponent,
    UpdateTypeComponent,
    AddTypeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
