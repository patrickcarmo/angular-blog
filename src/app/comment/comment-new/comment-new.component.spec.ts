import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommentNewComponent } from './comment-new.component';
import { CommentService } from 'src/app/services/comment.service';
import { of } from 'rxjs';

const mockComment = {
  user: 'Mock user',
  content: 'Mock content',
  postId: 10,
  parent_id: null,
  date: '2021-03-07',
};

describe('CommentNewComponent', () => {
  let component: CommentNewComponent;
  let fixture: ComponentFixture<CommentNewComponent>;

  const commentsServiceSpy = jasmine.createSpyObj('commentsService', ['save']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentNewComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: CommentService,
          useValue: commentsServiceSpy,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentNewComponent);
    component = fixture.componentInstance;

    commentsServiceSpy.save.and.returnValues(of(mockComment));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('the form', () => {
    it('should have a valid status when the fields are filled', () => {
      const user = component.form.controls['user'];
      const content = component.form.controls['content'];

      user.setValue('Mock Name');
      content.setValue('Mock content');

      expect(component.form.valid).toBeTruthy();
    });
  });

  describe('#saveComment', () => {
    it('should have mark the fields as touched when the form is invalid', () => {
      component.saveComment(component.form);

      const user = component.form.controls['user'];
      const content = component.form.controls['content'];

      expect(user.touched).toBeTruthy();
      expect(content.touched).toBeTruthy();
    });

    it(
      'should have called save and emit comment when the form is valid',
      waitForAsync(() => {
        const user = component.form.controls['user'];
        const content = component.form.controls['content'];
        const commentedEmitSpy = spyOn(component.commented, 'emit');

        user.setValue('Mock Name');
        content.setValue('Mock content');

        component.saveComment(component.form);
        fixture.detectChanges();

        expect(commentsServiceSpy.save).toHaveBeenCalled();
        expect(commentedEmitSpy).toHaveBeenCalledWith(mockComment.postId);
      })
    );
  });

  describe('#cancelComment', () => {
    it('should have emit cancelled as false', () => {
      const cancelledEmitSpy = spyOn(component.cancelled, 'emit');

      component.cancelComment();

      expect(cancelledEmitSpy).toHaveBeenCalledWith(false);
    });
  });
});
