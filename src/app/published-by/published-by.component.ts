import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-published-by',
  templateUrl: './published-by.component.html',
  styleUrls: ['./published-by.component.scss'],
})
export class PublishedByComponent implements OnInit {
  @Input() author = '';
  @Input() publishDate = '';

  constructor() {}

  ngOnInit(): void {}
}
