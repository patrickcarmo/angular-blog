import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

import { getTestBed, TestBed } from '@angular/core/testing';

import { environment } from 'src/environments/environment';
import { Comment } from '../models/comments.model';
import { CommentService } from './comment.service';

describe('CommentService', () => {
  let injector: TestBed;
  let service: CommentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommentService],
    });

    injector = getTestBed();
    service = TestBed.inject(CommentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getById', () => {
    it('should call http service with the correct path', (done) => {
      const id = 10;

      service.getById(id).subscribe(done);

      const req = httpMock.expectOne(
        `${environment.apiEndpoint}/posts/${id}/comments`
      );

      expect(req.request.method).toBe('GET');

      req.flush({});
    });
  });

  describe('#save', () => {
    it('should call http service with the correct path', (done) => {
      const comment: Comment = {
        id: 1,
        postId: 1,
        parent_id: 1,
        user: 'Mock user',
        date: '2021-03-07',
        content: 'Mock content',
      };

      service.save(comment).subscribe(done);

      const req = httpMock.expectOne(
        `${environment.apiEndpoint}/posts/${comment.postId}/comments`
      );

      expect(req.request.method).toBe('POST');

      req.flush({});
    });
  });
});
