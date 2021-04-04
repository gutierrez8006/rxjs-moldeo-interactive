import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, merge, empty } from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo, tap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // fromEvent(document, 'click').pipe(switchMap(() => interval(1000))).subscribe(console.log);

  const remainingLabel = document.getElementById('remaining');
  const pauseButton = document.getElementById('pause');
  const resumeButton = document.getElementById('resume');

  const obsInterval = interval(1000).pipe(mapTo(-1));
  const pause = fromEvent(pauseButton, 'click').pipe(mapTo(false));
  const resume = fromEvent(resumeButton, 'click').pipe(mapTo(true));

  const timer = merge(pause, resume)
    .pipe(
      startWith(false), // fuerza que inicie con un valor,
      tap(val => console.log(val)),
      switchMap(val => (val ? obsInterval : empty())), // empty hace que de aqui para abajo no se ejecute
      scan((acc, curr) => (curr ? curr + acc : acc), 10), // curr valor anterior, empieza en 10
      tap(val => console.log(val)),
      takeWhile(v => v >= 0)
    )
    .subscribe((val: any) => (remainingLabel.innerHTML = val));

  }

}
