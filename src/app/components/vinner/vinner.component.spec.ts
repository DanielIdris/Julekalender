import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinnerComponent } from './vinner.component';

describe('VinnerComponent', () => {
  let component: VinnerComponent;
  let fixture: ComponentFixture<VinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
