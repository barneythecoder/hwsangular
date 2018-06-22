import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { OrderFormComponent } from '../order-form/order-form.component';

@Component({
  selector: 'app-treats',
  templateUrl: './treats.component.html',
  styleUrls: ['./treats.component.css']
})
export class TreatsComponent implements OnInit {

  orderFormDialogRef: MatDialogRef<OrderFormComponent>;
  orderData: {}
  constructor(private dialog: MatDialog) { }
  openOrderFormDialog(items){
    let config: MatDialogConfig={
      width: '',
      height: '',
      position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
      },
      data: {
        itemName: items.itemName,
        itemPrice: items.itemPrice
      }
    }
    this.orderFormDialogRef = this.dialog.open(OrderFormComponent, config);

    this.orderFormDialogRef
    .afterClosed()
    .pipe(order => order)
    .subscribe(order => {      
      
     

    });

    
  }

  ngOnInit() {
  }

}
