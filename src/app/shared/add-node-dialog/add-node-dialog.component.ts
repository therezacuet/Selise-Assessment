import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-add-node-dialog',
  templateUrl: './add-node-dialog.component.html',
  styleUrls: ['./add-node-dialog.component.css']
})
export class AddNodeDialogComponent implements OnInit {

  addNodeForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,private dialogRef: MatDialogRef<AddNodeDialogComponent>) {
    this.createAddNodeForm();
  }

  createAddNodeForm() {
    this.addNodeForm = this.fb.group({
      id : [''],
      name: ['', Validators.required],
      childrens: [''],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.addNodeForm.controls;
  }


  submitProduct() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.addNodeForm.invalid) {
      return;
    }
    let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    this.addNodeForm.get('id').setValue(id);
    this.addNodeForm.get('childrens').setValue([]);
    this.dialogRef.close(this.addNodeForm.value);

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addProductForm.value));
  }

  ngOnInit() {
  }

}
