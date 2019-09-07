import { Injectable } from '@angular/core';
//import {Http, Response} from "@angular/http";
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import {TimedSegment} from "./timedsegment.model";

export const defaultTimedSegment: TimedSegment = JSON.parse("{\"user\":\"Encrypt5\",\"topic\":\"Fatigue\",\"quantity\":4}");
export const limitTimedSegment: TimedSegment = JSON.parse("{\"user\":\"Done\",\"topic\":\"Done\",\"quantity\":1}");
export const THRESHOLD: number = 4;


@Injectable({
  providedIn: 'root'
})
export class RedcapService {

	timedSegment: TimedSegment;
  lastTimedSegment: TimedSegment;
  timelimit: number;

  constructor(private http: HttpClient) {
  	this.timedSegment = defaultTimedSegment;
    this.timelimit = 0;
  }

  getTimedSegment(): TimedSegment{


  	if(this.timedSegment == undefined){
		  this.timedSegment = defaultTimedSegment;
  	} 
    if(this.lastTimedSegment == undefined){
      this.lastTimedSegment = defaultTimedSegment;
    }


    if(this.lastTimedSegment.topic == this.timedSegment.topic){
      this.timelimit = this.timelimit + 1;
    }else{
      this.timelimit = 0;
    }

    return this.timedSegment;

  }

  getLastTimedSegment(): TimedSegment{
    return this.lastTimedSegment ;
  }

  setTimedSegment(ts: TimedSegment) {
    this.timelimit = 0;
    this.lastTimedSegment.topic = this.timedSegment.topic;
  	this.timedSegment = ts;
  }


  persistTimedSegment(ts: TimedSegment): Observable<TimedSegment> {

    if(this.timelimit > THRESHOLD){
      return of(limitTimedSegment);
    }

    return this.http.put<TimedSegment>('http://mss.fsm.northwestern.edu/impactWS/TimeSegment', ts)
      .pipe(
        map(res => new TimedSegment().deserialize(res))
      );
  }


}
