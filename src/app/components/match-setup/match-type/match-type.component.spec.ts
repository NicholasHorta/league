import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTypeComponent } from './match-type.component';

describe('MatchTypeComponent', () => {
  let component: MatchTypeComponent;
  let fixture: ComponentFixture<MatchTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
