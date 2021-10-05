import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFourComponent } from './all-four.component';

describe('AllFourComponent', () => {
  let component: AllFourComponent;
  let fixture: ComponentFixture<AllFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
