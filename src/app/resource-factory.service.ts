import { Injectable } from '@angular/core';
import { Resource } from './resource'

import { EnhancingWellBeingComponent } from './components/enhancingwellbeing.component';
import { FinancialResourcesComponent } from './components/financialresources.component';
import { CommunityResourcesComponent } from './components/communityresources.component';
import { SupportGroupsComponent } from './components/supportgroups.component';
import { SupportiveOncologyComponent } from './components/supportiveoncology.component';
import { PalliativeCareComponent } from './components/palliativecare.component';


@Injectable({
  providedIn: 'root'
})
export class ResourceFactoryService {

  RESOURCES: Resource[] = [
  	new Resource(EnhancingWellBeingComponent, { id: 13, name: 'Well being', content:'EnhancingWellBeing.html'}),
  	new Resource(FinancialResourcesComponent, { id: 14, name: 'Financials', content:'FinancialResources.html'}),
    new Resource(CommunityResourcesComponent, { id: 15, name: 'Community', content:'CommunityResources.html'}),
    new Resource(SupportGroupsComponent, { id: 16, name: 'Support Groups', content:'SupportGroups.html'}),
    new Resource(SupportiveOncologyComponent, { id: 17, name: 'Supportive Oncology', content:'SupportiveOncology.html'}),
    new Resource(PalliativeCareComponent, { id: 18, name: 'Palliative Care', content:'PalliativeCare.html'})
  ];

  constructor() { }

  getResources(): Resource[]{ return this.RESOURCES;}

}
    