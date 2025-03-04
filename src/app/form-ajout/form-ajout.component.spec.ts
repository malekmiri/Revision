import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjoutComponent } from './form-ajout.component';

describe('FormAjoutComponent', () => {
  let component: FormAjoutComponent;
  let fixture: ComponentFixture<FormAjoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAjoutComponent]
    });
    fixture = TestBed.createComponent(FormAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
