import { Component, OnDestroy, OnInit } from '@angular/core';
import { AjaxListService } from '../../../services/ajax-list.service';
import { IVitrinaItemLw } from '../../../interfaces/vitrina-t.interfaces';

@Component({
  selector: 'app-ajaxlist',
  templateUrl: './ajaxlist.component.html',
  styleUrls: ['./ajaxlist.component.scss'],
})
export class AjaxlistComponent implements OnInit, OnDestroy {
  items: IVitrinaItemLw[];
  constructor(private service: AjaxListService) {
    this.items = [];
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}
  get baseUrl(): string {
    return this.service.baseUrl;
  }
}
