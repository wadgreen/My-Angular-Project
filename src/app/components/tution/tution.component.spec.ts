import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutionComponent } from './tution.component';

describe('TutionComponent', () => {
  let component: TutionComponent;
  let fixture: ComponentFixture<TutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
