import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogOverviewComponent } from './blog/blog-overview/blog-overview.component';

const routes: Routes = [
  {
    path: 'blog',
    component: BlogOverviewComponent,
  },
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
