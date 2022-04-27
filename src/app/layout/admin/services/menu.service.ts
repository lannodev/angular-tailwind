import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _isOpen$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  public toggleSidebar() {
    this._isOpen$.next(!this._isOpen$.value);
  }

  get isOpen$() { return this._isOpen$.asObservable(); }
  set isOpen(value: boolean) { this._isOpen$.next(value); }
}
