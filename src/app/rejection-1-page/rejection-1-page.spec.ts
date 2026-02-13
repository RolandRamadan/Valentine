import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rejection1Page } from './rejection-1-page';

describe('Rejection1Page', () => {
  let component: Rejection1Page;
  let fixture: ComponentFixture<Rejection1Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rejection1Page]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rejection1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
