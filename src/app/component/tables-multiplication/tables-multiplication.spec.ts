import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesMultiplication } from './tables-multiplication';

describe('TablesMultiplication', () => {
  let component: TablesMultiplication;
  let fixture: ComponentFixture<TablesMultiplication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablesMultiplication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesMultiplication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
