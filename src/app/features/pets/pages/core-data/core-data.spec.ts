import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreData } from './core-data';

describe('CoreData', () => {
  let component: CoreData;
  let fixture: ComponentFixture<CoreData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreData],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
