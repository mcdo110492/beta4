import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosSearchComponent } from './pos-search.component';

describe('PosSearchComponent', () => {
  let component: PosSearchComponent;
  let fixture: ComponentFixture<PosSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
