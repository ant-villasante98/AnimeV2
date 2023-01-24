import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAnimeComponent } from './buscar-anime.component';

describe('BuscarAnimeComponent', () => {
  let component: BuscarAnimeComponent;
  let fixture: ComponentFixture<BuscarAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarAnimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
