import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitorsPageComponent } from './exhibitors-page.component';

describe('ExhibitorsPageComponent', () => {
  let component: ExhibitorsPageComponent;
  let fixture: ComponentFixture<ExhibitorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhibitorsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
