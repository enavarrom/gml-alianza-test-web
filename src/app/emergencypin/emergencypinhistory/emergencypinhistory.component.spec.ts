import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencypinhistoryComponent } from './emergencypinhistory.component';

describe('EmergencypinhistoryComponent', () => {
  let component: EmergencypinhistoryComponent;
  let fixture: ComponentFixture<EmergencypinhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmergencypinhistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencypinhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
