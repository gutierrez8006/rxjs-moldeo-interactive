import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source = of(2000, 1000, 3000);

    const obsConcatMap = source.pipe(
      concatMap(v => of(`Valor: ${v}`).pipe(delay(v)))
    );

    obsConcatMap.subscribe(
      v => console.log(v)
    );
  }

}
