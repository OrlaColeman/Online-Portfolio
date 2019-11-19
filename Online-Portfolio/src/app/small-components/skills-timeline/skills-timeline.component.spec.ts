import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsTimelineComponent } from './skills-timeline.component';

describe('SkillsTimelineComponent', () => {
  let component: SkillsTimelineComponent;
  let fixture: ComponentFixture<SkillsTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
