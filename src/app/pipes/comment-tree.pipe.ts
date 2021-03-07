import { Pipe, PipeTransform } from '@angular/core';
import { Comment } from '../models/comments.model';

@Pipe({
  name: 'commentTree',
})
export class CommentTreePipe implements PipeTransform {
  transform(items: Comment[] | null): Comment[] {
    if (!items) {
      return [];
    }

    return items
      .reduce(
        (
          previousValue: any,
          currentValue: Comment,
          currentIndex: number,
          array: Comment[]
        ) => {
          if (currentValue.parent_id !== null) {
            const parent = array.find(
              (value) => value.id === currentValue.parent_id
            );

            if (parent) {
              parent.children = (parent.children || []).concat(currentValue);
            }

            return previousValue;
          }

          return previousValue.concat(currentValue);
        },
        []
      )
      .map(createTreeNode);
  }
}

function createTreeNode(comment: Comment): Comment {
  return {
    ...comment,
    children: comment.children?.length
      ? comment.children.map(createTreeNode)
      : [],
  };
}
