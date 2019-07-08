import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PodcastListComponent } from './components/podcast-list/podcast-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/podcast/misjonen/list', pathMatch: 'full'},
  {path: '**', redirectTo: '/podcast/misjonen/list'},
  {path: 'podcast/misjonen/list', component: PodcastListComponent},
  {path: '**', redirectTo: '/podcast/misjonen/list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
