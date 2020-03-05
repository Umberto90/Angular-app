import { Component,OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WebServiceCall } from '../app.service';
import {Location} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'my-app',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css']
})
export class HomeComponent implements OnInit {
  public myform : FormGroup
  public showuseritem = false
  result : any;
  public loading = true
  public num = 7
  public message = "Caricamento Dati..."
  public percent = 0
  public showform = 1
  public router : Router;
  public formitems = new Array(5)
  public nome = ""
  public tooltips = ['scherebale', 'bad', 'normal', 'good','wonderful'];
  public value = 0;
  constructor(private fb: FormBuilder,private route: ActivatedRoute , private location: Location ,private http: HttpClient) {
      this.myform = this.fb.group({

    });
    for (let i = 0; i < this.formitems.length; i++) {
        this.myform.addControl('Control_'+i, new FormControl('', [Validators.required]));
    }

    this.nome = this.route.snapshot.queryParams.name;
  }
  
  ngOnInit(){ 
    this.get_Album()
  }

  get_Album(){
    let users = new WebServiceCall(this.http)
    users.get_users().subscribe(
      (response:Response)=>{
        this.loading = false
        this.result = response;
        } 
    ); 
  }
  
  submit_form(){
    for (const i in this.myform.controls) {
      this.myform.controls[i].markAsDirty();
      this.myform.controls[i].updateValueAndValidity();
    }
    if(this.myform.valid){
      console.log("SUBMITTED!", this.myform.value)
    }
  }

  increment(){
    if(this.percent != 100){
      this.percent = this.percent + 10
    }
  }
  decrement(){
    if(this.percent != 0){
      this.percent = this.percent - 10
    }
  }
  counter(i: number) {
    return new Array(i);
  }
  get_name(name){
    alert(name);
  }
}
