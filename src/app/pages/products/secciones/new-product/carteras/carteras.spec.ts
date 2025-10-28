import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carteras } from './carteras';

describe('Carteras', () => {
  let component: Carteras;
  let fixture: ComponentFixture<Carteras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carteras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carteras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
