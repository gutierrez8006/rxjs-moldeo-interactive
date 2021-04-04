import { Component, OnInit } from '@angular/core';
import { ObsService } from '../services/obs.service';
import { forkJoin, pipe } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-multiples-observables',
  templateUrl: './multiples-observables.component.html',
  styleUrls: ['./multiples-observables.component.css']
})
export class MultiplesObservablesComponent implements OnInit {

  constructor(public obs: ObsService) { }

  ngOnInit(): void {
    // Ejemplo 1
    // this.obs.getGithub('ctmil').subscribe((res: any) => {
    //   console.log(res);
    // });

    // Ejemplo 2
    // forkJoin(
    //   this.obs.getGithub('ctmil'),
    //   this.obs.getGithub('odoo'),
    //   this.obs.getGithub('angular')
    //   ).subscribe((res) => {
    //     console.log(res);
    //   });

    // Ejemplo 3
    this.obs.getGithub('ctmil').pipe(
      tap((val: any) => console.log(val.blog)),
      mergeMap((res: any) => ajax(res.blog))
      // mergeMap((res2: any) => ajax(res2.blog))
    ).subscribe((final: any) => {
      console.log(final.status);
    });
  }

}
