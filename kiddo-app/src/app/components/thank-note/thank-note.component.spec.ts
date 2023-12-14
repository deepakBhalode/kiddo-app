import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankNoteComponent } from './thank-note.component';

describe('ThankNoteComponent', () => {
  let component: ThankNoteComponent;
  let fixture: ComponentFixture<ThankNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
