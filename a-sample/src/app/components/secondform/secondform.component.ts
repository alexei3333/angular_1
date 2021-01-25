import { Component, OnInit } from '@angular/core';
import { BankApplyItem, statusWorkEnum } from '../../interfaces/bankApplyItem';
import { FormDataService } from '../../services/form-data.service';
import { trackByFn } from '../../helpers/common';

@Component({
  selector: 'app-secondform',
  templateUrl: './secondform.component.html',
  styleUrls: ['./secondform.component.scss'],
})
export class SecondformComponent implements OnInit {
  selectedUrlOrdinary = '';
  submitted = false;
  trackBy = trackByFn;
  statusWorkEnum = statusWorkEnum;
  modelBank = this.dataService.GetBankItem();
  countries = this.dataService.Countries;
  constructor(private dataService: FormDataService) {}

  ngOnInit(): void {}
  debugInfo(): string {
    // console.log(JSON.stringify(this.modelBank));
    return JSON.stringify(this.modelBank);
  }
  onSubmit(): void {
    this.submitted = true;
    console.log('submitted!');
  }
}
