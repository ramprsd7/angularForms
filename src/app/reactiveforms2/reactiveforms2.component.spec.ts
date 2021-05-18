import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactiveforms2Component } from './reactiveforms2.component';

describe('Reactiveforms2Component', () => {
  let component: Reactiveforms2Component;
  let fixture: ComponentFixture<Reactiveforms2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reactiveforms2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reactiveforms2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
