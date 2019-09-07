import { ResourceInterface } from './resource.interface';
import { Type } from '@angular/core';

export class Resource implements ResourceInterface{

	constructor(public component: Type<any>, public data: any) {

		this.id = data.id;
		this.name = data.name;
		this.content = data.content;

	}

	id: number;
	name: string;
	content: string;

	// @Input() data: any;
}