import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPriceEditorComponent } from './item-price-editor.component';

describe('ItemPriceEditorComponent', () => {
  let component: ItemPriceEditorComponent;
  let fixture: ComponentFixture<ItemPriceEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPriceEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPriceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
