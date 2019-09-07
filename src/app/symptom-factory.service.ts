import { Injectable } from '@angular/core';
import { Resource } from './resource'
//import { ResourceComponent } from './resource/resource.component';

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

@Injectable({
  providedIn: 'root'
})
export class SymptomFactoryService {

  SYMPTOMS: Resource[] = [
  	new Resource(PainComponent, { id: 1, name: 'Pain', content:'Pain.html'}),
  	new Resource(FatigueComponent, { id: 2, name: 'Fatigue', content:'Fatigue.html'}),
    new Resource(DepressionComponent, { id: 3, name: 'Depression', content:'Depression.html'}),
    new Resource(AnxietyComponent, { id: 4, name: 'Anxiety', content:'Anxiety.html'}),
    new Resource(InsomniaComponent, { id: 5, name: 'Insomnia', content:'Insomnia.html'}),
    new Resource(PhysicalFunctionComponent, { id: 6, name: 'Physical Function', content:'PhysicalFunction.html'}),
    new Resource(NauseaComponent, { id: 7, name: 'Nausea', content:'Nausea.html'}),
    new Resource(VomitComponent, { id: 8, name: 'Vomiting', content:'Vomit.html'}),
    new Resource(BreathingComponent, { id: 9, name: 'Shortness of Breath', content:'Breathing.html'}),
   	new Resource(ConstipationComponent, { id: 10, name: 'Constipation', content:'Constipation.html'}),
	  new Resource(DiarrheaComponent, { id: 11, name: 'Diarrhea', content:'Diarrhea.html'}),
    new Resource(SexFunctioningComponent, { id: 12, name: 'Sexual Functioning', content:'SexualFunctioning.html'})
  ];

  constructor() { }

  getSymptoms(): Resource[]{ return this.SYMPTOMS;}

}