import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ciclo-observable',
  templateUrl: './ciclo-observable.component.html',
  styleUrls: ['./ciclo-observable.component.css']
})
export class CicloObservableComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    const myObservable = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next('Hola mundo');
      observer.error('Error N1');
      observer.complete();
    });

    const subs = myObservable.subscribe({
      next: x => console.log('El siguiente valor es ' + x),
      error: err => console.error('Error: ' + err),
      complete: () => console.log('Subscripcion Completa')
    });

    subs.unsubscribe();
  }

  public ngOnDestroy(): void {

  }
}
