import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { OrderFormComponent } from '../order-form/order-form.component';
import { MailorderService } from '../../services/mailorder.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-treats',
  templateUrl: './treats.component.html',
  styleUrls: ['./treats.component.css']
})
export class TreatsComponent implements OnInit {

  orderFormDialogRef: MatDialogRef<OrderFormComponent>;
  orderData: {}
  constructor(
    private dialog: MatDialog, 
    private mailorderService: MailorderService,
    public snackBar: MatSnackBar) { }

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
      if(!(typeof order === "undefined")){
        console.log("ORDER: "+order);
        this.mailorderService.mailReceivedOrder(order);

        this.snackBar.open("Order Received!", "DONE", {
         duration: 10000,
       });
      } 
    
    });

    
  }

  ngOnInit() {
  }

}
