import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";

import {RedcapService} from "./redcap.service";
import {TimedSegment} from "./timedsegment.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NU IMPACT';

  timedSegments: TimedSegment[];

   constructor(private redcapService: RedcapService) {
   }

	ngOnInit() {

		// this.redcapService.getTimedSegment().subscribe( res => this.timedSegments.push(res) );

		this.timedSegments =[];

		interval(15000)
		  .pipe(
		    startWith(0),
		    switchMap(() => this.redcapService.persistTimedSegment(this.redcapService.getTimedSegment()))
		  )
		  .subscribe( res => {

		  	this.timedSegments.push(res);
		  	//this.timedSegments.push(this.redcapService.getTimedSegment()); 
		  	}
		  );

	}

}
