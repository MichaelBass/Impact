import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EncrDecrService } from './encr-decr.service';
import { AppComponent } from './app.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ResourcesComponent } from './resources/resources.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { ResourceComponent } from './resource/resource.component';
import { ResourceDirective } from './resource.directive';

import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { ProfileComponent } from './profile/profile.component';
import { SeverityComponent } from './severity/severity.component';

import { RedcapService } from './redcap.service';
import { ResourceFactoryService } from './resource-factory.service';
import { SymptomFactoryService } from './symptom-factory.service';

import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { IncludeComponent } from './include/include.component';

import { AnxietyComponent } from './components/anxiety.component';
import { DepressionComponent } from './components/depression.component';
import { FatigueComponent } from './components/fatigue.component';
import { PainComponent } from './components/pain.component';
import { InsomniaComponent } from './components/insomnia.component';
import { PhysicalFunctionComponent } from './components/physicalfunction.component';
import { NauseaComponent } from './components/nausea.component';
import { VomitComponent } from './components/vomit.component';
import { BreathingComponent } from './components/breathing.component';
import { ConstipationComponent } from './components/constipation.component';
import { DiarrheaComponent } from './components/diarrhea.component';
import { SexFunctioningComponent } from './components/sexfunctioning.component';

import { EnhancingWellBeingComponent } from './components/enhancingwellbeing.component';
import { FinancialResourcesComponent } from './components/financialresources.component';
import { CommunityResourcesComponent } from './components/communityresources.component';
import { SupportGroupsComponent } from './components/supportgroups.component';
import { SupportiveOncologyComponent } from './components/supportiveoncology.component';
import { PalliativeCareComponent } from './components/palliativecare.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    SymptomsComponent,
    ResourceComponent,
    ResourceDirective,
    BookmarksComponent,
    ProfileComponent,
    SeverityComponent,
    HomeComponent,
    IncludeComponent,
    AnxietyComponent,
    DepressionComponent,
    FatigueComponent,
    PainComponent,
    InsomniaComponent,
    PhysicalFunctionComponent,
    NauseaComponent,
    VomitComponent,
    BreathingComponent,
    ConstipationComponent,
    DiarrheaComponent,
    SexFunctioningComponent,
    EnhancingWellBeingComponent,
    FinancialResourcesComponent,
    CommunityResourcesComponent,
    SupportGroupsComponent,
    SupportiveOncologyComponent,
    PalliativeCareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule.forRoot() 
  ],
  providers: [RedcapService, EncrDecrService, SymptomFactoryService, ResourceFactoryService],
  bootstrap: [AppComponent],
  entryComponents: [AnxietyComponent,DepressionComponent,FatigueComponent,PainComponent,InsomniaComponent,PhysicalFunctionComponent,NauseaComponent,VomitComponent,BreathingComponent,ConstipationComponent,DiarrheaComponent,SexFunctioningComponent,EnhancingWellBeingComponent,FinancialResourcesComponent,CommunityResourcesComponent,SupportGroupsComponent,SupportiveOncologyComponent,PalliativeCareComponent]
})
export class AppModule { }
