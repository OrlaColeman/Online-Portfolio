import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsBodyComponent } from './skills-body.component';

describe('SkillsBodyComponent', () => {
  let component: SkillsBodyComponent;
  let fixture: ComponentFixture<SkillsBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
