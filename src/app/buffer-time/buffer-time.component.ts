import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

@Component({
  selector: 'app-buffer-time',
  templateUrl: './buffer-time.component.html',
  styleUrls: ['./buffer-time.component.css']
})
export class BufferTimeComponent implements OnInit {
  title = 'Reactivex';
  constructor() { }

  ngOnInit(): void {
    const timer = interval(500);

    const buffer = timer.pipe(bufferTime(2000, 1000));

    const subs = buffer.subscribe(val => {
      console.log('Buffer: ', val);
    });
  }

}
