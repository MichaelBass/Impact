import { Component, OnInit } from '@angular/core';
import { ResourceComponent } from '../resource/resource.component';
import { Resource } from '../resource'
import {RedcapService} from "../redcap.service";
import {ResourceFactoryService} from "../resource-factory.service";


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resources : Resource[];

  constructor(private redcapService: RedcapService, private resourceFactory: ResourceFactoryService ) { }

  ngOnInit() {

    this.resources = this.resourceFactory.getResources();

  }

  myClick(event: any){

    let timedSegment = this.redcapService.getTimedSegment();
    timedSegment.topic = event.target.innerHTML;
    this.redcapService.setTimedSegment(timedSegment);


      (<any>window).ga('set', 'page', timedSegment.topic);
      (<any>window).ga('send', 'pageview');
        
  }

}
