import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './newpage.component.html',
  styleUrls: [ '../app.component.css' ]
})
export class NewPage  {
  public first_param;
  public second_param;
  constructor(private route: ActivatedRoute,private location: Location) {
    this.first_param = this.route.snapshot.queryParams.numero;
    this.second_param = this.route.snapshot.queryParams.percent;
  }

  back(){
    this.location.back();
  }  
}
