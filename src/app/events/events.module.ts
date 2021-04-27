import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { EventsRoutingModule } from './events-routing.module';
import { EventsHomeComponent } from './events-home/events-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [EventsHomeComponent, PlaceholderComponent, TimesDirective, SegmentComponent],
  imports: [CommonModule, EventsRoutingModule, SharedModule],
  exports: []
})
export class EventsModule {}
