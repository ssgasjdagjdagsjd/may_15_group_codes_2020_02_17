import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequePrintPageComponent } from './cheque-print-page.component';

describe('ChequePrintPageComponent', () => {
  let component: ChequePrintPageComponent;
  let fixture: ComponentFixture<ChequePrintPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequePrintPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequePrintPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
