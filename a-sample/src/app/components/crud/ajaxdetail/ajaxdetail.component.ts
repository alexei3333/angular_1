import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AjaxListService } from 'src/app/services/ajax-list.service';

@Component({
  selector: 'app-ajaxdetail',
  templateUrl: './ajaxdetail.component.html',
  styleUrls: ['./ajaxdetail.component.scss'],
})
export class AjaxdetailComponent implements OnInit, OnChanges {
  id: number = 0;
  constructor(
    private service: AjaxListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(switchMap((par) => par.getAll('id')))
      .subscribe((data) => (this.id = +data));
  }
  ngOnChanges(changes: SimpleChanges): void {
    //  const chng = changes[0];
    //  chng.
  }
}
