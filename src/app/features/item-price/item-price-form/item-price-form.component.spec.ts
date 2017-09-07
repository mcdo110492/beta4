import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPriceFormComponent } from './item-price-form.component';

describe('ItemPriceFormComponent', () => {
  let component: ItemPriceFormComponent;
  let fixture: ComponentFixture<ItemPriceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPriceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPriceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
