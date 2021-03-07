import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogOverviewComponent } from './blog/blog-overview/blog-overview.component';
import { BlogPostDetailComponent } from './blog/blog-post-detail/blog-post-detail.component';

const routes: Routes = [
  {
    path: 'blog',
    component: BlogOverviewComponent,
  },
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  {
    path: 'blog/:id',
    component: BlogPostDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
