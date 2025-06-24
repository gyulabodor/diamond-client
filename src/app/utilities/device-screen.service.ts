import { Injectable } from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {combineLatestWith, Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";
import {ScreenSize} from "./models/screen-size.enum";

@Injectable({
  providedIn: 'root',
})
export class DeviceScreenService {

  constructor(private readonly breakpointObserver: BreakpointObserver) { }

  private isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.HandsetPortrait,Breakpoints.HandsetLandscape])
    .pipe(map(result => result.matches));

  private isWeb$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Web,Breakpoints.Medium])
    .pipe(map(result => result.matches));

  public deviceScreen$: Observable<ScreenSize> = this.isHandset$.pipe(
    combineLatestWith(this.isWeb$),
    map(([isWeb,]) => {
      return isWeb ? ScreenSize.LARGE : ScreenSize.MOBILE;
    }),
    shareReplay({bufferSize: 1, refCount: true})
  );
}
