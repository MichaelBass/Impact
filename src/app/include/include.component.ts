
import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, Directive } from '@angular/core';
//https://stackoverflow.com/questions/37123514/read-html-file-into-template-in-angular-2
//https://angular.io/guide/dynamic-component-loader
@Component({
  selector: 'my-ng-include',
  template: '<div #myNgIncludeContent></div>',
  styleUrls: ['./include.component.css']
})
export class IncludeComponent implements OnInit {

    @Input('src')
    private templateUrl: string;

    @ViewChild('myNgIncludeContent', { read: ViewContainerRef })
    protected contentTarget: ViewContainerRef;

  constructor(private componentResolver: ComponentFactoryResolver) { }

  ngOnInit() {

	var dynamicComponent = this.createContentComponent(this.templateUrl);
	//this.componentResolver.resolveComponent(dynamicComponent)
	//.then((factory: any) => this.contentTarget.createComponent(factory));	
	
	//this.componentResolver.resolveComponentFactory(dynamicComponent)

	this.contentTarget.createComponent( this.componentResolver.resolveComponentFactory(dynamicComponent) );
  }

    createContentComponent(templateUrl) {
        @Component({
            selector: 'my-ng-include-content',
            templateUrl: templateUrl
        })
        class MyNgIncludeContent {}
        return MyNgIncludeContent ;
    }

}
