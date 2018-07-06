import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { OrderFormComponent } from '../order-form/order-form.component';
import { MailorderService } from '../../services/mailorder.service';
import {MatSnackBar} from '@angular/material';
import { OrderReceivedDialogComponent } from '../order-received-dialog/order-received-dialog.component';
@Component({
  selector: 'app-mobile-treats',
  templateUrl: './mobile-treats.component.html',
  styleUrls: ['./mobile-treats.component.css']
})
export class MobileTreatsComponent implements OnInit {
  orderFormDialogRef: MatDialogRef<OrderFormComponent>;
  orderData: {}
  constructor(private dialog: MatDialog, 
    private orderReceivedDialog: MatDialog,
    private mailorderService: MailorderService,) { }
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
        if(!(Object.keys(order).length === 0)){
          console.log("ORDER: "+order);
          this.mailorderService.mailReceivedOrder(order);
  
  
          
  
          this.orderReceivedDialog.open(OrderReceivedDialogComponent);
          /* this.snackBar.open("Order Received!", "DONE", {
           duration: 10000,
         }); */
        } 
      
      });
  
      
    }
  ngOnInit() {
    (<any>window).ga('send', 'event', {
      eventCategory: 'Page View',
      eventLabel: 'Mobile products page(Treats)',
      eventAction: 'User tapped on see more button',
      eventValue: 10
    });
  }

}
