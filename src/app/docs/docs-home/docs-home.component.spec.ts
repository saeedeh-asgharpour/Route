import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { docsHomeComponent } from './docs-home.component';

describe('DocsHomeComponent', () => {
  let component: docsHomeComponent;
  let fixture: ComponentFixture<docsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ docsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(docsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
