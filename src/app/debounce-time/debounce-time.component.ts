import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // DebounceTime, espera un tiempo antes de mostrar el valor, es muy utilizado en busquedas
    // por ejemplo al escribir hola, envia el texto hola y no: h, o, l, a, lo que implicaria hacer cuatro busquedas,
    // mientras con debounce solo una busqueda
    const search = document.getElementById('search');

    const keyup = fromEvent(search, 'keyup');

    keyup.pipe(
      map((e: any) => e.currentTarget.value),
      debounceTime(1000)
    ).subscribe(console.log);
  }

}
