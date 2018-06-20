import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MnFullpageModule } from 'ngx-fullpage';
import { LandingComponent } from './components/landing/landing.component';
import { KeyboardsComponent } from './components/keyboards/keyboards.component';
import { MonitorsComponent } from './components/monitors/monitors.component';
import { SsdComponent } from './components/ssd/ssd.component';
import { EtcComponent } from './components/etc/etc.component';
import { TreatsComponent } from './components/treats/treats.component';
import { ProductpageComponent } from './components/productpage/productpage.component';

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
    SsdComponent,
    EtcComponent,
    TreatsComponent,
    ProductpageComponent
  ],
  imports: [ 
    BrowserModule,
    MnFullpageModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
