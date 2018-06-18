import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MnFullpageModule } from 'ngx-fullpage';
import { LandingComponent } from './components/landing/landing.component';
import { KeyboardsComponent } from './components/keyboards/keyboards.component';
import { MonitorsComponent } from './components/monitors/monitors.component';

const appRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'keyboards', component: KeyboardsComponent},
  {path: 'monitors',component: MonitorsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    KeyboardsComponent,
    MonitorsComponent
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
