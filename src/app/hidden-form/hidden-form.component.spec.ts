import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenFormComponent } from './hidden-form.component';

describe('HiddenFormComponent', () => {
  let component: HiddenFormComponent;
  let fixture: ComponentFixture<HiddenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
