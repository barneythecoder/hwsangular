import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { OrderFormComponent } from '../order-form/order-form.component';
@Component({
  selector: 'app-monitors',
  templateUrl: './monitors.component.html',
  styleUrls: ['./monitors.component.css']
})
export class MonitorsComponent implements OnInit {

  orderFormDialogRef: MatDialogRef<OrderFormComponent>;
  constructor(private dialog: MatDialog) { }
  openOrderFormDialog(){
    this.orderFormDialogRef = this.dialog.open(OrderFormComponent);
  }

  ngOnInit() {
  }



}
