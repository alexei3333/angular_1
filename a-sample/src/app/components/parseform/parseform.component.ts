import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../../services/form-data.service';
import { ISimpleDto } from '../../interfaces/common';
import { trackByFn } from '../../helpers/common';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parseform',
  templateUrl: './parseform.component.html',
  styleUrls: ['./parseform.component.scss'],
})
export class ParseformComponent implements OnInit {
  trackBy = trackByFn;
  familyControl = new FormControl('test');
  output = '';
  JSON = JSON;
  constructor(private dataService: FormDataService) {}

  personalDataGroup = new FormGroup({
    titleCtl: new FormControl('t'),
    nameCtl: new FormControl('n'),
    addressGroup: new FormGroup({
      streetCtl: new FormControl('S'),
      townCtl: new FormControl('T'),
    }),
  });

  ngOnInit(): void {}

  sendForm(): void {
    console.log('button clicked');
    this.output = JSON.stringify(this.personalDataGroup.value); // controls['nameCtl'].value;
  }
  resetForm(): void {
    this.personalDataGroup.reset();
  }
  patchForm(): void {
    this.personalDataGroup.patchValue({
      nameCtl: 'pppname',
      addressGroup: { townCtl: 'town ctl' },
    });
  }
  get countries(): ISimpleDto[] {
    return this.dataService.Countries;
  }
}
