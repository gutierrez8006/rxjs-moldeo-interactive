import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit {
  title = 'reactivex';
  constructor() { }

  ngOnInit(): void {
    const el = document.getElementById('elemento');

    const mouseMove = fromEvent(el, 'mousemove');

    mouseMove.subscribe((e: MouseEvent) => {
      console.log(`Coords: ${e.clientX}, Y: ${e.clientY}`);
      
    });
  }

}
