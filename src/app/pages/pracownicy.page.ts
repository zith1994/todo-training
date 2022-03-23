import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-pracownicy-page',
  templateUrl: './pracownicy.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PracownicyPage {
    param$ = this._activatedRoute.params
    constructor(private _activatedRoute: ActivatedRoute) {}
}
