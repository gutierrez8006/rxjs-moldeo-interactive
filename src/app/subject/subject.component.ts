import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const subject = new Subject<number>();

    subject.subscribe({
      next: (n) => console.log(`ObsA: ${n}`)
    });

    subject.subscribe({
      next: (n) => console.log(`ObsB: ${n + 1}`)
    });

    subject.next(1);
    subject.next(2);
  }

}
