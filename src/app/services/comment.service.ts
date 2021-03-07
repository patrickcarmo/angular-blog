import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/comments.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Comment[]> {
    const url = `${environment.apiEndpoint}/posts/${id}/comments`;
    return this.http.get<Comment[]>(url);
  }

  save(data: Comment): Observable<Comment> {
    const url = `${environment.apiEndpoint}/posts/${data.postId}/comments`;
    return this.http.post<Comment>(url, data);
  }
}
