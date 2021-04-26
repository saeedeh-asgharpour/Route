import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsHomeComponent } from './events-home/events-home.component';

@NgModule({
  declarations: [EventsHomeComponent],
  imports: [CommonModule, EventsRoutingModule],
  exports: []
})
export class EventsModule {}
