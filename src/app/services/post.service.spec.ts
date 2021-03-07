import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

import { getTestBed, TestBed } from '@angular/core/testing';

import { environment } from 'src/environments/environment';
import { PostService } from './post.service';

describe('PostService', () => {
  let injector: TestBed;
  let service: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService],
    });

    injector = getTestBed();
    service = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: PostService = TestBed.inject(PostService);
    expect(service).toBeTruthy();
  });

  describe('#getAll', () => {
    it('should call http service with the correct path', (done) => {
      const service: PostService = TestBed.inject(PostService);

      service.getAll().subscribe(done);

      const req = httpMock.expectOne(`${environment.apiEndpoint}/posts`);

      expect(req.request.method).toBe('GET');

      req.flush({});
    });
  });

  describe('#getById', () => {
    it('should call http service with the correct path', (done) => {
      const id = 10;
      const service: PostService = TestBed.inject(PostService);

      service.getById(id).subscribe(done);

      const req = httpMock.expectOne(`${environment.apiEndpoint}/posts/${id}`);

      expect(req.request.method).toBe('GET');

      req.flush({});
    });
  });
});
