import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, timer, Subscription } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { AuthenticationService } from '../../../../service/authentication.service';

@Component({
  selector: 'app-user-activity',
  template: `<span style="float: right;">  {{ (minutesDisplay) }}:{{ (secondsDisplay) && (secondsDisplay <=59) ? secondsDisplay : '00' }}
  </span>`
  ,

})
export class UserActivityComponent implements OnDestroy, OnInit {

  minutesDisplay = 0;
  secondsDisplay = 0;

  endTime = 5;

  unsubscribe$: Subject<void> = new Subject();
  timerSubscription: Subscription = new Subscription();

  constructor(private authService: AuthenticationService) {

  }

  ngOnInit(): void {
    this.resetTimer();
    this.authService.userActionOccured.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(() => {
      if (this.timerSubscription) {
        this.timerSubscription.unsubscribe();
      }
      this.resetTimer();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  resetTimer(endTime: number = this.endTime): void {
    const interval = 1000;
    const duration = endTime * 60;
    this.timerSubscription = timer(0, interval).pipe(
      take(duration)
    ).subscribe(value =>
      this.render((duration - +value) * interval),
      err => { },
      () => {
        this.authService.logOutUser();
      }
    );
  }

  private render(count: number): void {
    this.secondsDisplay = this.getSeconds(count);
    this.minutesDisplay = this.getMinutes(count);
  }

  private getSeconds(ticks: number): any {
    const seconds = ((ticks % 60000) / 1000).toFixed(0);
    return this.pad(seconds);
  }

  private getMinutes(ticks: number): any {
    const minutes = Math.floor(ticks / 60000);
    return this.pad(minutes);
  }

  private pad(digit: any): any {
    return digit <= 9 ? '0' + digit : digit;
  }

}
