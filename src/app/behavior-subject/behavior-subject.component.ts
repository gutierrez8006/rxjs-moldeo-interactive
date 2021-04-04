import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, interval, merge } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css']
})
export class BehaviorSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Siempre trae el ultimo valor
    // Ejemplo 1
    // const subject = new BehaviorSubject(1);

    // subject.subscribe(console.log);

    // subject.next(2);

    // subject.subscribe(console.log);

    // Ejemplo 2
    const subject = new BehaviorSubject(0);

    const click$ = fromEvent(document, 'click').pipe(
      map((e: MouseEvent) => ({
        x: e.clientX,
        y: e.clientY
      }))
    );

    const interval$ = interval(1000).pipe(
      tap(n => subject.next(n)),
      map(val => val * 2)
    );

    merge(click$, interval$).subscribe(console.log);
  }

}
