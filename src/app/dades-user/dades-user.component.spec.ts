import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadesUserComponent } from './dades-user.component';

describe('DadesUserComponent', () => {
  let component: DadesUserComponent;
  let fixture: ComponentFixture<DadesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadesUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
