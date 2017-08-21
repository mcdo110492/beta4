import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisterFormComponent } from './minister-form.component';

describe('MinisterFormComponent', () => {
  let component: MinisterFormComponent;
  let fixture: ComponentFixture<MinisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
