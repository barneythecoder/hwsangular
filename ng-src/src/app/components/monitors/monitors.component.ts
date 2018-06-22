import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { OrderFormComponent } from '../order-form/order-form.component';
import { MailorderService } from '../../services/mailorder.service';

@Component({
  selector: 'app-monitors',
  templateUrl: './monitors.component.html',
  styleUrls: ['./monitors.component.css']
})
export class MonitorsComponent implements OnInit {

  orderFormDialogRef: MatDialogRef<OrderFormComponent>;
  orderData: {}
  constructor(
    private dialog: MatDialog, 
    private mailorderService: MailorderService) { }

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
      
     this.mailorderService.mailReceivedOrder(order).subscribe(data=>{});

    });

    
  }


  ngOnInit() {
  }



}
