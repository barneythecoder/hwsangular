import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<OrderFormComponent>) { }

  ngOnInit() {
    this.form = this.formBuilder.group({order: ''});
  }
  submit(form) {
    this.dialogRef.close(`${form.value.order}`);
  }
}
