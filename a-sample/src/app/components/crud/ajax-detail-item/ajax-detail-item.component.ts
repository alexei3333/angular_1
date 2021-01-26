import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IVitrinaItemLw } from 'src/app/interfaces/vitrina-t.interfaces';

@Component({
  selector: 'app-ajax-detail-item',
  templateUrl: './ajax-detail-item.component.html',
  styleUrls: ['./ajax-detail-item.component.scss'],
})
export class AjaxDetailItemComponent implements OnInit {
  @Input() item!: IVitrinaItemLw; // | null = null;

  constructor() {}

  ngOnInit(): void {}
}
