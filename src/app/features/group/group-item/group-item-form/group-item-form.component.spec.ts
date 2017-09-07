import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupItemFormComponent } from './group-item-form.component';

describe('GroupItemFormComponent', () => {
  let component: GroupItemFormComponent;
  let fixture: ComponentFixture<GroupItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
