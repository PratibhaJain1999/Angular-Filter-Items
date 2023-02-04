import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsHeaderComponent } from './items-header.component';

describe('ItemsHeaderComponent', () => {
  let component: ItemsHeaderComponent;
  let fixture: ComponentFixture<ItemsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
