import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  obs: any;

  constructor() { }

  ngOnInit(): void {
    this.obs = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
    });
  }

  rxjsFun() {
    console.log('just before subscribe');
    this.obs.subscribe({
      next: x => console.log('got value ' + x),
      error: err => console.log('something wrong occurred: ' + err),
      complete: () => console.log('done')
    });

    console.log('just after subscribe');
  }

}
