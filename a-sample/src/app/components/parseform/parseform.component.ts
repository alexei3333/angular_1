import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../../services/form-data.service';
import { ISimpleDto } from '../../interfaces/common';
import { trackByFn } from '../../helpers/common';

@Component({
  selector: 'app-parseform',
  templateUrl: './parseform.component.html',
  styleUrls: ['./parseform.component.scss']
})
export class ParseformComponent implements OnInit {
  trackBy= trackByFn;
  constructor(private dataService: FormDataService) { }

  ngOnInit(): void {
  }

  sendForm(): void
  {
    console.log('button clicked');
  }
  get  countries(): ISimpleDto[]
  {
    return this.dataService.Countries;
  }

}
