import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObliczPiComponent } from './oblicz-pi.component';

describe('ObliczPiComponent', () => {
  let component: ObliczPiComponent;
  let fixture: ComponentFixture<ObliczPiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObliczPiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObliczPiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
