import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutomaticComponent } from './automatic/automatic.component';
import { ManualComponent } from './manual/manual.component';

const routes: Routes = [
  {path: 'manual', component: ManualComponent},
  {path: 'automatic', component: AutomaticComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
