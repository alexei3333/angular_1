import { Component, OnDestroy, OnInit } from '@angular/core';
import { AjaxListService } from '../../../services/ajax-list.service';

@Component({
  selector: 'app-ajaxlist',
  templateUrl: './ajaxlist.component.html',
  styleUrls: ['./ajaxlist.component.scss'],
})
export class AjaxlistComponent implements OnInit, OnDestroy {
  constructor(private service: AjaxListService) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
