import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPriceCreateComponent } from './item-price-create.component';

describe('ItemPriceCreateComponent', () => {
  let component: ItemPriceCreateComponent;
  let fixture: ComponentFixture<ItemPriceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPriceCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPriceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
