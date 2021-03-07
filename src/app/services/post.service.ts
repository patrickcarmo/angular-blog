import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Post[]> {
    const url = `${environment.apiEndpoint}/posts`;

    return this.http.get<Post[]>(url);
  }

  getById(id: number): Observable<Post> {
    const url = `${environment.apiEndpoint}/posts/${id}`;

    return this.http.get<Post>(url);
  }
}
