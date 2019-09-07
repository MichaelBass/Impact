import { Component, OnInit } from '@angular/core';
import { ResourceComponent } from '../resource/resource.component';
import { Resource } from '../resource'
import {RedcapService} from "../redcap.service";
import {SymptomFactoryService} from "../symptom-factory.service";

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  symptoms : Resource[];

  constructor(private redcapService: RedcapService, private symptomFactory: SymptomFactoryService ) { }

  ngOnInit() {

    this.symptoms = this.symptomFactory.getSymptoms();

  }

  myClick(event: any){
    let timedSegment = this.redcapService.getTimedSegment();
    timedSegment.topic = event.target.innerHTML;
    this.redcapService.setTimedSegment(timedSegment);
    
      (<any>window).ga('set', 'page', timedSegment.topic);
      (<any>window).ga('send', 'pageview');

  }

}
