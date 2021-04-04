import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-merge-map-flat-map',
  templateUrl: './merge-map-flat-map.component.html',
  styleUrls: ['./merge-map-flat-map.component.css']
})
export class MergeMapFlatMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Ejemplo 1
    // const source = of(2000, 1000, 3000);

    // const obsMergeMap = source.pipe(
    //   mergeMap(v => of(`Valor: ${v}`).pipe(delay(v)))
    // );

    // obsMergeMap.subscribe(
    //   v => console.log(v)
    // );

    // Ejemplo 2

    const source = of(
      ajax.getJSON('https://api.github.com/users/ctmil'),
      ajax.getJSON('https://api.github.com/users/ibuioli')
    );

    const obsMergeMap = source.pipe(
      mergeMap(v => v)
    );

    obsMergeMap.subscribe(
      v => console.log(v)
    );
  }

}
