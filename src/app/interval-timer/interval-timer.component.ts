import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.css']
})
export class IntervalTimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const contador = interval(1000);

    // contador.subscribe((n) => {
    //   console.log(`Cada ${n} segundos`);
    // });

    const contadorTimer = timer(1000);

    contadorTimer.subscribe((n) => {
      console.log(`triggered`);
    });

  }

}
