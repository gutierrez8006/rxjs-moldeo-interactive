import { Component, OnInit } from '@angular/core';
import { forkJoin, of, interval } from 'rxjs';
import { delay, take } from 'rxjs/operators';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css']
})
export class ForkJoinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const fork = forkJoin(
      of('Hola'),
      of('Mundo').pipe(delay(500)),
      interval(1000).pipe(take(2))
    );

    fork.subscribe(val => console.log(val))
  }

}
