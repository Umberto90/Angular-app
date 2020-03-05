import { Component,OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
