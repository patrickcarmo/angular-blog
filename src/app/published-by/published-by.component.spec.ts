import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedByComponent } from './published-by.component';

describe('PublishedByComponent', () => {
  let component: PublishedByComponent;
  let fixture: ComponentFixture<PublishedByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishedByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
