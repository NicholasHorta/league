import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneVOneComponent } from './one-v-one.component';

describe('OneVOneComponent', () => {
  let component: OneVOneComponent;
  let fixture: ComponentFixture<OneVOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneVOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneVOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
