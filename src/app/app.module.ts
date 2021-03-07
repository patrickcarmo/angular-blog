import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogOverviewComponent } from './blog/blog-overview/blog-overview.component';
import { SortByPropertyPipe } from './pipes/sort-property.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogPostDetailComponent } from './blog/blog-post-detail/blog-post-detail.component';
import { PublishedByComponent } from './published-by/published-by.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { CommentTreePipe } from './pipes/comment-tree.pipe';
import { CommentNewComponent } from './comment/comment-new/comment-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogOverviewComponent,
    SortByPropertyPipe,
    BlogPostDetailComponent,
    PublishedByComponent,
    CommentListComponent,
    CommentTreePipe,
    CommentNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
