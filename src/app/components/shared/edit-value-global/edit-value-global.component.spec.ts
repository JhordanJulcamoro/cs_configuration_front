import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditValueGlobalComponent } from './edit-value-global.component';

describe('EditValueGlobalComponent', () => {
  let component: EditValueGlobalComponent;
  let fixture: ComponentFixture<EditValueGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditValueGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditValueGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
