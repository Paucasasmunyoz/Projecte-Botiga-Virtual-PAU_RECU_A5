import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeuPaginaComponent } from './peu-pagina.component';

describe('PeuPaginaComponent', () => {
  let component: PeuPaginaComponent;
  let fixture: ComponentFixture<PeuPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeuPaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeuPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
