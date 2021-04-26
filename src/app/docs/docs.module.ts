import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { docsHomeComponent } from './docs-home/docs-home.component';

@NgModule({
  declarations: [docsHomeComponent],
  imports: [CommonModule, DocsRoutingModule]
})
export class DocsModule {}


