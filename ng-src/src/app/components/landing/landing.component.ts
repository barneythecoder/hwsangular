import { Component, OnInit, enableProdMode, HostListener,  OnDestroy } from '@angular/core';
import { MnFullpageService } from 'ngx-fullpage';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public isScrolled: boolean;
  constructor(private fp: MnFullpageService) { }
  
  ngOnInit() {
  }
  ngOnDestroy(){
    this.fp.destroy('all');
    
  }


  public onLeave(index: number, nextIndex: number, direction: string): void {
    this.isScrolled = true;
  }



}
