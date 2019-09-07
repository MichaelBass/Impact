import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EncrDecrService } from '../encr-decr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private EncrDecr: EncrDecrService ) { }

  ngOnInit() {	
  //console.log(this.route.snapshot.queryParams);

    var myObject = this.route.snapshot.queryParams;

  	//var encrypted = this.EncrDecr.set(myObject.test);
  	//console.log('Encrypted :' + encrypted + ' from: ' + myObject.test);
  	
    if(myObject.test){
      var decrypted = this.EncrDecr.get(myObject.test);
  	  console.log('Decrypted :' + decrypted );
    }
    

  }

}
