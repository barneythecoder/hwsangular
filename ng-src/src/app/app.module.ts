import { WindowModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
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
import { MatSnackBarModule } from '@angular/material/snack-bar';

import {MailorderService} from './services/mailorder.service';
import { OrderReceivedDialogComponent } from './components/order-received-dialog/order-received-dialog.component';
import { WhyusComponent } from './components/whyus/whyus.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { MobileTreatsComponent } from './components/mobile-treats/mobile-treats.component';
import { MobileCandyComponent } from './components/mobile-candy/mobile-candy.component';

const appRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'products/keyboards', component: KeyboardsComponent},
  {path: 'products/monitors',component: MonitorsComponent},
  {path: 'products/ssd', component: SsdComponent},
  {path: 'products/etc', component: EtcComponent},
  {path: 'products/treats', component: TreatsComponent},
  {path: 'productpage', component: ProductpageComponent},
  {path: 'whyus', component: WhyusComponent},
  {path: 'mobile',component: MobileComponent},
  {path: 'mobile/treats', component: MobileTreatsComponent},
  {path: 'mobile/candy', component: MobileCandyComponent}
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
    ProductpageComponent,
    OrderReceivedDialogComponent,
    WhyusComponent,
    MobileComponent,
    MobileTreatsComponent,
    MobileCandyComponent,
  ],
  imports:[
 CommonModule,
WindowModule,
  
    
    MnFullpageModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatSnackBarModule
    
  ],
  entryComponents:[OrderFormComponent, OrderReceivedDialogComponent],
  providers: [MailorderService],
})

export class AppModule { }
