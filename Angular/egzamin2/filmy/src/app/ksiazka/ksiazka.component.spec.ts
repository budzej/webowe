import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KsiazkaComponent } from './ksiazka.component';

describe('KsiazkaComponent', () => {
  let component: KsiazkaComponent;
  let fixture: ComponentFixture<KsiazkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KsiazkaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KsiazkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
