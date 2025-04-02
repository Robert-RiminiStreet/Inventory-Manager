import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RushOrderComponent } from './rush-order.component';

describe('RushOrderComponent', () => {
  let component: RushOrderComponent;
  let fixture: ComponentFixture<RushOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RushOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RushOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
