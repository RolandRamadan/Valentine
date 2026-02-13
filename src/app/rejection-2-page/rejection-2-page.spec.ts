import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rejection2Page } from './rejection-2-page';

describe('Rejection2Page', () => {
  let component: Rejection2Page;
  let fixture: ComponentFixture<Rejection2Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rejection2Page]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rejection2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
