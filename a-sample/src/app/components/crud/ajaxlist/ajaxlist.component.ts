import { Component, OnDestroy, OnInit } from '@angular/core';
import { AjaxListService } from '../../../services/ajax-list.service';
import {
  IFetchVitrinaResponse,
  IVitrinaItemLw,
  IVitrinaTabbedCriteria,
} from '../../../interfaces/vitrina-t.interfaces';
import {
  catchError,
  concatAll,
  first,
  map,
  mergeMap,
  pluck,
  take,
  tap,
} from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ajaxlist',
  templateUrl: './ajaxlist.component.html',
  styleUrls: ['./ajaxlist.component.scss'],
})
export class AjaxlistComponent implements OnInit, OnDestroy {
  resp?: IFetchVitrinaResponse;
  items: IVitrinaItemLw[];
  subscription?: Subscription;
  constructor(private service: AjaxListService) {
    this.items = [];
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    console.log(
      'is subscripton closed on destroy ' + this.subscription?.closed
    );
  }
  get baseUrl(): string {
    return this.service.baseUrl;
  }
  searchItems(): void {
    const criteria = {
      count: 10,
      depCity: 1,
      site: 0,
      countrySite: 0,
    } as IVitrinaTabbedCriteria;
    this.subscription = this.service
      .getVitrinaItems(criteria)
      .pipe(
        // concatAll(),first())
        first(),
        // map((x) =>
        //   (x.items || []).map((u) => {
        //     u.id, u.picturePath, u.decorNameTruncated;
        //   })
        // ),
        map((x) => x.items || []),
        map((x) => x.slice(0, 2)),
        // concatAll(),
        // mergeMap((x) => x),
        // concatAll(),
        // pluck('items'),
        // concatAll(),
        // map(x =>({x.id,x.picturePath,x.decorNameTruncated}) ),
        tap((x) => {
          console.log('fetching ' + JSON.stringify(x));
        })
      )
      //  catchError(er => {console.log(er.message);})
      // .pipe(map(x=>x.success))
      .subscribe((resp) => (this.items = resp || []));
    console.log('is subscripton closed ' + this.subscription?.closed);
  }
  displaySubscriptionInfo(): void {
    console.log('is subscripton closed on check ' + this.subscription?.closed);
  }
}
//   get items(): IVitrinaItemLw[] {
//     if (!this.resp || !this.resp?.success) {
//       console.log('empty resp');
//       return [];
//     }

//     return this.resp?.items || [];
//   }
// }
