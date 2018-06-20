import { Component, OnInit, inject, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  form: FormGroup;
  items: {};
  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<OrderFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.items = this.data;
     }

  ngOnInit() {
    this.form = this.formBuilder.group({order:''});
    
  }
  submit(form) {
    this.dialogRef.close(this.items);
  }
}
