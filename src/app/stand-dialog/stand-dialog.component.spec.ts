import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandDialogComponent } from './stand-dialog.component';

describe('StandDialogComponent', () => {
  let component: StandDialogComponent;
  let fixture: ComponentFixture<StandDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
