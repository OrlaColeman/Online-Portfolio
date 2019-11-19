import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AusComponent } from './aus.component';

describe('AusComponent', () => {
  let component: AusComponent;
  let fixture: ComponentFixture<AusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
