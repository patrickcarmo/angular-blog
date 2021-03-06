import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.scss'],
})
export class BlogOverviewComponent implements OnInit {
  posts$: Observable<Post[]> = of([]);

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getAll();
  }
}
