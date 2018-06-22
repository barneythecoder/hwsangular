import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MnFullpageModule } from 'ngx-fullpage';
import { LandingComponent } from './components/landing/landing.component';
import { KeyboardsComponent } from './components/keyboards/keyboards.component';
import { MonitorsComponent } from './components/monitors/monitors.component';
import { OrderFormComponent } from './components/order-form/order-form.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { SsdComponent } from './components/ssd/ssd.component';
import { EtcComponent } from './components/etc/etc.component';
import { TreatsComponent } from './components/treats/treats.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import {MailorderService} from './services/mailorder.service';

const appRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'products/keyboards', component: KeyboardsComponent},
  {path: 'products/monitors',component: MonitorsComponent},
  {path: 'products/ssd', component: SsdComponent},
  {path: 'products/etc', component: EtcComponent},
  {path: 'products/treats', component: TreatsComponent},
  {path: 'productpage', component: ProductpageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    KeyboardsComponent,
    MonitorsComponent,
    OrderFormComponent,
    SsdComponent,
    EtcComponent,
    TreatsComponent,
    ProductpageComponent
  ],
  imports: [ 
    BrowserModule,
    MnFullpageModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule
    
  ],
  entryComponents:[OrderFormComponent],
  providers: [MailorderService],
  bootstrap: [AppComponent]
})

export class AppModule { }
