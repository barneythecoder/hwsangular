import { Component, OnInit, inject, Inject } from '@angular/core';
import {  MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  form: FormGroup;
  items: {
    itemName:'',
    itemPrice:'',
    customerName:'',
    customerAddress:'',
    customerNumber:''
  };
  constructor(
    private orderReceivedDialog: MatDialog,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<OrderFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  /*     this.form = new FormGroup({
        customerName: new FormControl(),
        customerAddress: new FormControl(),
        customerPhoneNumber: new FormControl(),
      }); */

      this.form = formBuilder.group({
        customerName: '',
        customerAddress: '',
        customerPhoneNumber: '',
      });
      this.items = {
        itemName: data.itemName,
        itemPrice: data.itemPrice, 
        customerName: '',
        customerAddress: '',
        customerNumber: ''};
     }

  ngOnInit() {
   
    (<any>window).ga('send', 'event', {
      eventCategory: 'Click',
      eventLabel: 'Buy now',
      eventAction: 'User clicked Buy Now button on product: '+this.items.itemName,
      eventValue: 10
    });
    
  }
  submit(form) {
    const custName = form.controls.customerName.value;
    const custAddress= form.controls.customerAddress.value;
    const custPhone = form.controls.customerPhoneNumber.value;

    if((!custName || custName.length === 0 || /^\s*$/.test(custName))){
      console.log("Enter Name");
    
    }else if(!custAddress || custAddress.length === 0 || /^\s*$/.test(custAddress)){

    }else if(!custPhone || custPhone.length === 0 || /^\s*$/.test(custPhone)){

    }else{
      
      this.items.customerName = form.controls.customerName.value;
      this.items.customerAddress = form.controls.customerAddress.value;
      this.items.customerNumber = form.controls.customerPhoneNumber.value;
      
      this.dialogRef.close(this.items);
    }
  }
}
