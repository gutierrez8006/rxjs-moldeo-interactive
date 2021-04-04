import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { scan, delay } from 'rxjs/operators';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const src = of(1, 2, 3, 4, 5).pipe(delay(1000));

    const scanObs = src.pipe(
      // scan((a, c) => a + c, 10)
      scan((a, c) => [...a, c], [])
    );

    scanObs.subscribe(val => console.log(val));
  }

}
