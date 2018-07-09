import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCandyComponent } from './mobile-candy.component';

describe('MobileCandyComponent', () => {
  let component: MobileCandyComponent;
  let fixture: ComponentFixture<MobileCandyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileCandyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCandyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
