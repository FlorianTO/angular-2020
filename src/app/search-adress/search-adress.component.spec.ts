import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAdressComponent } from './search-adress.component';

describe('SearchAdressComponent', () => {
  let component: SearchAdressComponent;
  let fixture: ComponentFixture<SearchAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAdressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
