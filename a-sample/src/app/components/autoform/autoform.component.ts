import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-autoform',
  templateUrl: './autoform.component.html',
  styleUrls: ['./autoform.component.scss'],
})
export class AutoformComponent implements OnInit {
  output = '';
  JSON = JSON;
  autoFormGroup = this.fb.group({
    titleCtl: ['at', Validators.required],
    nameCtl: ['an'],
    addressGroup: this.fb.group({
      streetCtl: ['as'],
      townCtl: ['at'],
    }),
    points: this.fb.array([this.fb.control('arr')]),
  });
  k = 1;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  sendForm(): void {
    console.log('button clicked');
    this.output = JSON.stringify(this.autoFormGroup.value); // controls['nameCtl'].value;
  }
  resetForm(): void {
    this.autoFormGroup.reset();
  }
  patchForm(): void {
    this.autoFormGroup.patchValue({
      nameCtl: 'pppname',
      addressGroup: { townCtl: 'town ctl' },
    });
  }
  addFormControl(): void {
    this.k++;
    const ctl = this.fb.control(`${this.k} ctl`);
    ctl.setValue(`${this.k} control`);
    this.points.push(ctl);
  }
  get points(): FormArray {
    return this.autoFormGroup.get('points') as FormArray;
  }
}
