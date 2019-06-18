import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as _ from 'lodash';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'gpt-dialog-form',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { fields: any; actions?: any }
  ) {
    const { fields } = this.data;
    const formControls = this.createControlsSchema(fields);
    this.form = this.fb.group(formControls);
  }

  ngOnInit() {}

  submit() {
    this.dialogRef.close(this.form.value);
  }

  createControlsSchema(fields) {
    const controlsSchema = _.reduce(
      fields,
      (result, { name, value = '' }) => {
        result[name] = [value];
        return result;
      },
      {}
    );

    return controlsSchema;
  }
}
