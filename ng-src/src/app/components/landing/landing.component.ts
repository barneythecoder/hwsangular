import { Component, OnInit, enableProdMode, HostListener,  OnDestroy } from '@angular/core';
import { MnFullpageService } from 'ngx-fullpage';
import {Router} from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public isScrolled: boolean;
  constructor(private fp: MnFullpageService,
              private router: Router) { }
  
  ngOnInit() {
    if(window.innerWidth<1081){
      this.router.navigate(['/mobile']);
    }
  }
  ngOnDestroy(){
    this.fp.destroy('all');
    
  }


  public onLeave(index: number, nextIndex: number, direction: string): void {
    this.isScrolled = true;
  }



}
