import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { tap, mapTo, share } from 'rxjs/operators'

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const time = timer(1000);

    const obs = time.pipe(
      tap(() => console.log('TAP ON')),
      mapTo('END OBS')
    );

    const subs01 = obs.subscribe(val => console.log(val));
    const subs02 = obs.subscribe(val => console.log(val));

    const shareObs = obs.pipe(share());

    console.log('SHARE ON');

    const subs03 = shareObs.subscribe(val => console.log(val));
    const subs04 = shareObs.subscribe(val => console.log(val));
    
  }

}
