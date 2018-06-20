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
    MonitorsComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    MnFullpageModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents:[OrderFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
