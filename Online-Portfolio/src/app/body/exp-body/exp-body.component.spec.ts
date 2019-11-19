import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpBodyComponent } from './exp-body.component';

describe('ExpBodyComponent', () => {
  let component: ExpBodyComponent;
  let fixture: ComponentFixture<ExpBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
