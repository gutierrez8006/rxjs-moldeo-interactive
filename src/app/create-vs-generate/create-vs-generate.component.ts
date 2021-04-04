import { Component, OnInit } from '@angular/core';
import { Observable, generate } from 'rxjs';

@Component({
  selector: 'app-create-vs-generate',
  templateUrl: './create-vs-generate.component.html',
  styleUrls: ['./create-vs-generate.component.css']
})
export class CreateVsGenerateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const obs = new Observable((observer) => {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);
    //   observer.next(4);
    //   observer.next(5);
    //   observer.complete();
    // });

    // const sub = obs.subscribe(val => console.log(val));

    // Generate
    // Crea un observable en base a una estructura loop
    generate(
      1,
      i => i <= 5,
      i => i + 1
    ).subscribe(console.log);
    
  }

}
