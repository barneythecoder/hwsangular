import { Component, OnInit, inject, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

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
  constructor(private formBuilder: FormBuilder,
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
   
    
    
  }
  submit(form) {
    this.items.customerName = form.controls.customerName.value;
    this.items.customerAddress = form.controls.customerAddress.value;
    this.items.customerNumber = form.controls.customerPhoneNumber.value;
    this.dialogRef.close(this.items);
  }
}
