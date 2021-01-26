import { Component, OnInit } from '@angular/core';
import { AjaxListService } from 'src/app/services/ajax-list.service';

@Component({
  selector: 'app-ajaxdetail',
  templateUrl: './ajaxdetail.component.html',
  styleUrls: ['./ajaxdetail.component.scss'],
})
export class AjaxdetailComponent implements OnInit {
  constructor(private service: AjaxListService) {}

  ngOnInit(): void {}
}
