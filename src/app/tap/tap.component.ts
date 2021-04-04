import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');

    const positions = clicks.pipe(
      tap(ev => console.log('Procesado: ' + ev),
      err => console.log(err),
      () => console.log('Completado'))
    );

    positions.subscribe(pos => console.log(pos));

  }

}
