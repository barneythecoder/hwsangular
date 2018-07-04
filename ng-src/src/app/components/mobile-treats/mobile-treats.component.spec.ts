import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTreatsComponent } from './mobile-treats.component';

describe('MobileTreatsComponent', () => {
  let component: MobileTreatsComponent;
  let fixture: ComponentFixture<MobileTreatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileTreatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTreatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
