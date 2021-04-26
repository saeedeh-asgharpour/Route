import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsModule } from './events/events.module';
import { DocsModule } from './docs/docs.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [BrowserModule, EventsModule, DocsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
