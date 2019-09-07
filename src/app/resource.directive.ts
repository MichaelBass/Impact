import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[resource-host]',
})
export class ResourceDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

