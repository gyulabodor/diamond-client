import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {DeviceScreenService} from "../../utilities/device-screen.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {ScreenSize} from "../../utilities/models/screen-size.enum";
import {BehaviorSubject, Observable} from "rxjs";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {ACTUAL_PAGES_DATA} from "../../pages/actual-pages.data";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatToolbarRow,
    RouterLink,
    NgForOf,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  screenSize$?: Observable<ScreenSize>;
  toggled$ = new BehaviorSubject<boolean>(false);
  constructor(protected deviceScreenService: DeviceScreenService) {
  }

  ngOnInit(): void {
        this.screenSize$ = this.deviceScreenService.deviceScreen$
  }

  toggle():void{
    this.toggled$.next(!this.toggled$.value);
  }

  protected readonly ScreenSize = ScreenSize;
  protected readonly ACTUAL_PAGES_DATA = ACTUAL_PAGES_DATA;
}
