import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReceivedDialogComponent } from './order-received-dialog.component';

describe('OrderReceivedDialogComponent', () => {
  let component: OrderReceivedDialogComponent;
  let fixture: ComponentFixture<OrderReceivedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReceivedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReceivedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
