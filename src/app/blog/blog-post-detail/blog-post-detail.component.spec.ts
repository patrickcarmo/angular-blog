import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { BlogPostDetailComponent } from './blog-post-detail.component';
import { PostService } from 'src/app/services/post.service';
import { CommentService } from 'src/app/services/comment.service';
import { CommentTreePipe } from 'src/app/pipes/comment-tree.pipe';
import { SortByPropertyPipe } from 'src/app/pipes/sort-property.pipe';
import { CommentNewComponent } from 'src/app/comment/comment-new/comment-new.component';
import { PublishedByComponent } from 'src/app/published-by/published-by.component';
import { CommentListComponent } from 'src/app/comment/comment-list/comment-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const postId = 1;

const mockComment = [
  {
    user: 'Mock user',
    content: 'Mock content',
    postId,
    parent_id: null,
    date: '2021-03-07',
  },
];

const mockPost = [
  {
    id: postId,
    title: 'Blog post #1',
    author: 'Melissa Manges',
    publish_date: '2016-02-23',
    slug: 'blog-post-1',
    description: 'Utroque denique invenire et has.',
    content:
      '<p>Utroque denique invenire et has. Cum case definitiones no, est dicit placerat verterem ne.</p> <p>In ius nonumy perfecto adipiscing, ad est cibo iisque aliquid, dicit civibus eum ei. Cum animal suscipit at, utamur utroque appareat sed ex.</p>',
  },
];

let routeMock = {
  snapshot: {
    paramMap: convertToParamMap({
      id: postId,
    }),
  },
};

describe('BlogPostDetailComponent', () => {
  let component: BlogPostDetailComponent;
  let fixture: ComponentFixture<BlogPostDetailComponent>;

  const activatedRouteSpy: jasmine.SpyObj<any> = routeMock;

  const commentsServiceSpy = jasmine.createSpyObj('commentsService', [
    'getById',
  ]);

  const postsServiceSpy = jasmine.createSpyObj('postsService', ['getById']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BlogPostDetailComponent,
        CommentTreePipe,
        SortByPropertyPipe,
        CommentNewComponent,
        PublishedByComponent,
        CommentListComponent,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteSpy,
        },
        {
          provide: CommentService,
          useValue: commentsServiceSpy,
        },
        {
          provide: PostService,
          useValue: postsServiceSpy,
        },
      ],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostDetailComponent);
    component = fixture.componentInstance;

    // activatedRouteSpy.getById.and.returnValues(of(mockComment));
    commentsServiceSpy.getById.and.returnValues(of(mockComment));
    postsServiceSpy.getById.and.returnValues(of(mockPost));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should load post details after get post id', () => {
      component.ngOnInit();
      fixture.detectChanges();

      expect(postsServiceSpy.getById).toHaveBeenCalledWith(postId);
      expect(commentsServiceSpy.getById).toHaveBeenCalledWith(postId);
    });
  });

  describe('#loadComments', () => {
    it('should have called the method loadComments with correct parameter', () => {
      component.loadComments(postId);
      fixture.detectChanges();

      expect(commentsServiceSpy.getById).toHaveBeenCalledWith(postId);
    });
  });
});
