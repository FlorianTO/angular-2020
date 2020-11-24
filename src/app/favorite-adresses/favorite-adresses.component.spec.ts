import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteAdressesComponent } from './favorite-adresses.component';

describe('FavoriteAdressesComponent', () => {
  let component: FavoriteAdressesComponent;
  let fixture: ComponentFixture<FavoriteAdressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteAdressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteAdressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
