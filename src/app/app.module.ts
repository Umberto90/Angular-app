import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { HttpClientModule } from '@angular/common/http';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { RouterModule, Routes } from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {NewPage} from './Newpage/newpage.component';
import {HomeComponent} from './Home/home.component';
import {LoginComponent} from './Login/login.component';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
/** config angular i18n **/
import { registerLocaleData } from '@angular/common';
import { RoutingModule } from './routing.module';
import en from '@angular/common/locales/en';
import {APP_BASE_HREF} from '@angular/common';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,NewPage,HomeComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoutingModule,
    /** import ng-zorro-antd root module，you should import NgZorroAntdModule and avoid importing sub modules directly **/
    NgZorroAntdModule,
    NzInputNumberModule,
    NzSelectModule
  ],
  exports:[RouterModule],
  bootstrap: [ AppComponent],
  /** config ng-zorro-antd i18n (language && date) **/
  providers   : [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }