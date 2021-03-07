import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BlogOverviewComponent } from './blog-overview.component';
import { of } from 'rxjs';
import { SortByPropertyPipe } from 'src/app/pipes/sort-property.pipe';

describe('BlogOverviewComponent', () => {
  let component: BlogOverviewComponent;
  let fixture: ComponentFixture<BlogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogOverviewComponent, SortByPropertyPipe],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the footer with Angular messa', () => {
    const fixture = TestBed.createComponent(BlogOverviewComponent);
    const result = 'Lets get informed!';

    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const expected = compiled.querySelector('h2').textContent;

    expect(expected).toContain(result);
  });

  it('should render the .banner h2 message', () => {
    const fixture = TestBed.createComponent(BlogOverviewComponent);
    const result = 'Lets get informed!';

    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const expected = compiled.querySelector('h2').textContent;

    expect(expected).toContain(result);
  });

  it('should render the .banner h3 message', () => {
    const fixture = TestBed.createComponent(BlogOverviewComponent);
    const result = 'Read the latest news from our blog';

    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const expected = compiled.querySelector('h3').textContent;

    expect(expected).toContain(result);
  });

  it(`should show the message 'No posts yet!' when there is no post`, () => {
    const result = 'No posts yet!';

    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const expected = compiled.querySelector('section.articles h3').textContent;

    expect(expected).toEqual(result);
  });

  it(`should not show the message 'No posts yet!' when there is post`, () => {
    component.posts$ = of([
      {
        id: 1,
        title: 'Blog post #1',
        author: 'Melissa Manges',
        publish_date: '2016-02-23',
        slug: 'blog-post-1',
        description: 'Utroque denique invenire et has.',
        content:
          '<p>Utroque denique invenire et has. Cum case definitiones no, est dicit placerat verterem ne.</p> <p>In ius nonumy perfecto adipiscing, ad est cibo iisque aliquid, dicit civibus eum ei. Cum animal suscipit at, utamur utroque appareat sed ex.</p>',
      },
    ]);

    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const expected = compiled.querySelector('section.articles h3');

    expect(expected).toBeNull();
  });
});
