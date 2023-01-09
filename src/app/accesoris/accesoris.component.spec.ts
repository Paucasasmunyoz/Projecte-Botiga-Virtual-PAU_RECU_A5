import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesorisComponent } from './accesoris.component';

describe('AccesorisComponent', () => {
  let component: AccesorisComponent;
  let fixture: ComponentFixture<AccesorisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesorisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
