import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarContrasenyaComponent } from './cambiar-contrasenya.component';

describe('CambiarContrasenyaComponent', () => {
  let component: CambiarContrasenyaComponent;
  let fixture: ComponentFixture<CambiarContrasenyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarContrasenyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiarContrasenyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
