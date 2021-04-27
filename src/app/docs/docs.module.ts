import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { docsHomeComponent } from './docs-home/docs-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [docsHomeComponent, TableComponent],
  imports: [CommonModule, DocsRoutingModule, SharedModule]
})
export class DocsModule {}


