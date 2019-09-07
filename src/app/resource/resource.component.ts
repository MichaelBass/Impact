import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, AfterViewInit, OnDestroy, Type, ViewEncapsulation} from '@angular/core';
import { Resource } from '../resource'
import { ResourceDirective } from '../resource.directive';
import {RedcapService} from "../redcap.service";
import {TimedSegment} from "../timedsegment.model";


@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResourceComponent implements OnInit, AfterViewInit, OnDestroy  {

	@Input() resource: Resource;

	@ViewChild(ResourceDirective) resourcehost: ResourceDirective;

	timedSegment: TimedSegment;

	constructor(private redcapService: RedcapService, private componentFactoryResolver: ComponentFactoryResolver) {}

	ngOnInit() {
		this.timedSegment = this.redcapService.getTimedSegment();
	}
 
 	ngAfterViewInit(){
  		this.loadComponent();
  	}

	ngOnDestroy() {
		console.log("ngOnDestroy");
	}

	// https://malcoded.com/posts/angular-dynamic-components/
	loadComponent() {

		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.resource.component);

		const viewContainerRef = this.resourcehost.viewContainerRef;
		viewContainerRef.clear();
		const componentRef = viewContainerRef.createComponent(componentFactory);
		// (<AdComponent>componentRef.instance).data = adItem.data;
	}

}
