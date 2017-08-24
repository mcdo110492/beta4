import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaptismPrintComponent } from './baptism-print.component';

describe('BaptismPrintComponent', () => {
  let component: BaptismPrintComponent;
  let fixture: ComponentFixture<BaptismPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaptismPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaptismPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
