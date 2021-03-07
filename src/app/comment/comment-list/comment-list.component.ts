import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from 'src/app/models/comments.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent implements OnInit {
  @Input() comments: Comment[] | undefined = [];

  @Output() commented = new EventEmitter<number>();

  showButtonReply = false;

  currentComment: Comment | null = null;

  constructor() {}

  ngOnInit(): void {}

  toggleComment(close: boolean): void {
    this.showButtonReply = close;
  }
}
