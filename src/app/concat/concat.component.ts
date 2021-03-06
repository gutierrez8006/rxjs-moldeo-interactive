import { Component, OnInit } from '@angular/core';
import { concat, interval, range } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const timer = interval(1000).pipe(take(4));
    const rango = range(1, 10);

    const result = concat(timer, rango);

    result.subscribe(x => console.log(x));
  }

}
