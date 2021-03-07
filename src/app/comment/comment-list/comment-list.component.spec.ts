import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListComponent } from './comment-list.component';

const mockComment = [
  {
    id: 1,
    user: 'Mock user',
    content: 'Mock content',
    postId: 10,
    parent_id: 1,
    date: '2021-03-07',
    children: [],
  },
];

describe('CommentListComponent', () => {
  let component: CommentListComponent;
  let fixture: ComponentFixture<CommentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have displayed the card when there is comment', () => {
    component.comments = mockComment;

    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const expected = compiled.querySelector('.post-comment');

    expect(expected).toBeTruthy();
  });

  describe('#toggleComment', () => {
    it('should have updated the variable showButtonReply', () => {
      component.toggleComment(true);

      expect(component.showButtonReply).toBeTruthy();
    });
  });
});
