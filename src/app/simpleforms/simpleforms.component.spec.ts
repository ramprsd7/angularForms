import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleformsComponent } from './simpleforms.component';

describe('SimpleformsComponent', () => {
  let component: SimpleformsComponent;
  let fixture: ComponentFixture<SimpleformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
