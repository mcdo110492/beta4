import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriagePrintComponent } from './marriage-print.component';

describe('MarriagePrintComponent', () => {
  let component: MarriagePrintComponent;
  let fixture: ComponentFixture<MarriagePrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriagePrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriagePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
