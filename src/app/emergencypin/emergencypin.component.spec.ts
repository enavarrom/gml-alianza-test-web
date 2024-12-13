import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencypinComponent } from './emergencypin.component';

describe('EmergencypinComponent', () => {
  let component: EmergencypinComponent;
  let fixture: ComponentFixture<EmergencypinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmergencypinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencypinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
