import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Comment } from 'src/app/models/comments.model';
import { Post } from 'src/app/models/posts.model';
import { CommentService } from 'src/app/services/comment.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog-post-detail',
  templateUrl: './blog-post-detail.component.html',
  styleUrls: ['./blog-post-detail.component.scss'],
})
export class BlogPostDetailComponent implements OnInit {
  post$: Observable<Post> | Observable<null> = of(null);
  comments$: Observable<Comment[]> = of([]);

  postId: number | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute?.snapshot?.paramMap?.get('id');
    if (!!id) {
      this.postId = Number(id);
      this.post$ = this.postsService.getById(this.postId);
      this.loadComments(id);
    }
  }

  loadComments(id: any): void {
    this.comments$ = this.commentService.getById(id);
  }
}
