import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Joyas } from './joyas';

describe('Joyas', () => {
  let component: Joyas;
  let fixture: ComponentFixture<Joyas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Joyas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Joyas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
