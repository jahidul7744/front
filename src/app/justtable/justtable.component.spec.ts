import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JusttableComponent } from './justtable.component';

describe('JusttableComponent', () => {
  let component: JusttableComponent;
  let fixture: ComponentFixture<JusttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JusttableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JusttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
