import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingComponent } from './sorting.component';

describe('FiltersComponent', () => {
  let component: SortingComponent;
  let fixture: ComponentFixture<SortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
