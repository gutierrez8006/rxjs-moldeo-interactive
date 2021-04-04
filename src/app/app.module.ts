import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { FromEventComponent } from './from-event/from-event.component';
import { MapFilterComponent } from './map-filter/map-filter.component';
import { TapComponent } from './tap/tap.component';
import { ShareComponent } from './share/share.component';
import { ConcatComponent } from './concat/concat.component';
import { CicloObservableComponent } from './ciclo-observable/ciclo-observable.component';
import { BufferTimeComponent } from './buffer-time/buffer-time.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { MergeMapFlatMapComponent } from './merge-map-flat-map/merge-map-flat-map.component';
import { MultiplesObservablesComponent } from './multiples-observables/multiples-observables.component';
import { ScanComponent } from './scan/scan.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectMulticastComponent } from './subject-multicast/subject-multicast.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { CreateVsGenerateComponent } from './create-vs-generate/create-vs-generate.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    IntervalTimerComponent,
    FromEventComponent,
    MapFilterComponent,
    TapComponent,
    ShareComponent,
    ConcatComponent,
    CicloObservableComponent,
    BufferTimeComponent,
    SwitchMapComponent,
    ForkJoinComponent,
    ConcatMapComponent,
    MergeMapFlatMapComponent,
    MultiplesObservablesComponent,
    ScanComponent,
    SubjectComponent,
    SubjectMulticastComponent,
    ReplaySubjectComponent,
    BehaviorSubjectComponent,
    DebounceTimeComponent,
    CreateVsGenerateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
