import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionGlobalComponent } from './configuracion-global.component';

describe('ConfiguracionGlobalComponent', () => {
  let component: ConfiguracionGlobalComponent;
  let fixture: ComponentFixture<ConfiguracionGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
