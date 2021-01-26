import { Component, Input, OnInit } from '@angular/core';
import { IVitrinaItemLw } from 'src/app/interfaces/vitrina-t.interfaces';

@Component({
  selector: 'app-ajax-detail-item',
  templateUrl: './ajax-detail-item.component.html',
  styleUrls: ['./ajax-detail-item.component.scss'],
})
export class AjaxDetailItemComponent implements OnInit {
  @Input() item: IVitrinaItemLw | null = null;
  id = this.item?.id;
  picturePath = this.item?.picturePath;
  decorNameTruncated = this.item?.decorNameTruncated;

  constructor() {}

  ngOnInit(): void {}
}
