import { Component,OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './login.component.html',
  styleUrls: [ './login.scss' ]
})
export class LoginComponent  {
  public loginform : FormGroup
  public gotohome = false
  public errmess = false
  constructor(private fb: FormBuilder,private router: Router) {
      this.loginform = this.fb.group({
      userName: [null,Validators.required],
      password: [null,Validators.required]
    });
    console.log(this.Get_Browser())
  }
  
  login_submit(){
    if(
      this.loginform.value.userName &&this.loginform.value.password && this.loginform.value.userName == this.loginform.value.password
      ){
      let name = this.loginform.value.userName
      this.router.navigate(['/home'], { queryParams: { name: name } });
    }
    else{
      this.errmess = true
    }
  }

  Get_Browser() {

    var userAgent = window.navigator.userAgent;
    var browsers = {
      chrome: /chrome/i, safari: /safari/i, firefox: /firefox/i, ie: /internet explorer/i
      };

    for(var key in browsers) {
      if (browsers[key].test(userAgent)) {
        return key;
      }
    };

    return 'unknown';
}

}
