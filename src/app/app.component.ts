import { Component, HostBinding } from '@angular/core';
import { ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-app';
  @HostBinding('class.pc') pcMode = false;
  constructor(private element: ElementRef,
    private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
      .subscribe({
        next: (result: any) => {
          for (let breakpoint of Object.keys(result.breakpoints)) {
            if (result.breakpoints[breakpoint]) {


              if (breakpoint === Breakpoints.HandsetPortrait) {
                this.element.nativeElement.classList.remove('pc');
              }
              if (breakpoint === Breakpoints.HandsetLandscape) {
                this.element.nativeElement.classList.add('pc');
              }
            }
          }
        },
      });

  }
}
