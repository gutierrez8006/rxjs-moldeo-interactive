import { Component, OnInit } from '@angular/core';
import { interval, from, Subject, ConnectableObservable } from 'rxjs';
import {tap, multicast, delay } from 'rxjs/operators';

@Component({
  selector: 'app-subject-multicast',
  templateUrl: './subject-multicast.component.html',
  styleUrls: ['./subject-multicast.component.css']
})
export class SubjectMulticastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Ejemplo 1
    // const source = from([1, 2, 3, 4]);
    // const multi = source.pipe(multicast(() => new Subject())) as ConnectableObservable<any>;

    // multi.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });

    // multi.subscribe({
    //   next: (v) => console.log(`observerB: ${v}`)
    // });

    // multi.connect();

    // Ejemplo 2
    const source = interval(3000).pipe(
      tap((n) => console.log(`ID: ${n}`))
    );

    const multi = source.pipe(multicast(() => new Subject())) as ConnectableObservable<any>;

    multi.subscribe(v => console.log(v));
    multi.subscribe(v => console.log(v));

    multi.connect();

  }
}
