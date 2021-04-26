import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { docsHomeComponent } from './docs-home/docs-home.component';

const routes: Routes = [
  { path: 'docs', component: docsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule {}
