import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiRecommendationCardComponent } from './ai-recommendation-card.component';

describe('AiRecommendationCardComponent', () => {
  let component: AiRecommendationCardComponent;
  let fixture: ComponentFixture<AiRecommendationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiRecommendationCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiRecommendationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
