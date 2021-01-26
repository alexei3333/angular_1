import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { AjaxListService } from 'src/app/services/ajax-list.service';

@Component({
  selector: 'app-ajaxdetail',
  templateUrl: './ajaxdetail.component.html',
  styleUrls: ['./ajaxdetail.component.scss'],
})
export class AjaxdetailComponent implements OnInit, OnChanges {
  constructor(private service: AjaxListService) {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    //  const chng = changes[0];
    //  chng.
  }
}
