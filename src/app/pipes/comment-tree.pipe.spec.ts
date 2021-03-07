import { Comment } from '../models/comments.model';
import { CommentTreePipe } from './comment-tree.pipe';

const mockData: Comment[] = [
  {
    user: 'Patrick',
    content: 'Hello! Good morning.',
    postId: 6,
    parent_id: null,
    date: '2021-03-07',
    id: 41,
  },
  {
    user: 'Jhon',
    content: 'Good morning, have a nice day.',
    postId: 6,
    parent_id: 41,
    date: '2021-03-07',
    id: 42,
  },
  {
    user: 'Maria',
    content: `it's a good new.`,
    postId: 6,
    parent_id: null,
    date: '2021-03-07',
    id: 43,
  },
];

describe('CommentTreePipe', () => {
  let pipe: CommentTreePipe;

  beforeEach(() => {
    pipe = new CommentTreePipe();
  });

  it('should return null when the data is null', () => {
    const expected = pipe.transform(null);

    expect(expected).toEqual([]);
  });

  it('should sort the array by the id property as ASC', () => {
    const result: Comment[] = [
      {
        user: 'Patrick',
        content: 'Hello! Good morning.',
        postId: 6,
        parent_id: null,
        date: '2021-03-07',
        id: 41,
        children: [
          {
            user: 'Jhon',
            content: 'Good morning, have a nice day.',
            postId: 6,
            parent_id: 41,
            date: '2021-03-07',
            id: 42,
            children: [],
          },
        ],
      },
      {
        user: 'Maria',
        content: `it's a good new.`,
        postId: 6,
        parent_id: null,
        date: '2021-03-07',
        id: 43,
        children: [],
      },
    ];

    const expected = pipe.transform(mockData);

    expect(expected).toEqual(result);
  });
});
