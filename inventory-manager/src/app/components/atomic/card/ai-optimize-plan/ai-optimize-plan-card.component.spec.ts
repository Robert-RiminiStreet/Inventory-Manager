import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiOptimizePlanCardComponent } from './ai-optimize-plan-card.component';

describe('AiOptimizePlanCardComponent', () => {
  let component: AiOptimizePlanCardComponent;
  let fixture: ComponentFixture<AiOptimizePlanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiOptimizePlanCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiOptimizePlanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
