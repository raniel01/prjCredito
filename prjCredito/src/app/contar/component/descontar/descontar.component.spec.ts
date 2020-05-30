import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescontarComponent } from './descontar.component';

describe('DescontarComponent', () => {
  let component: DescontarComponent;
  let fixture: ComponentFixture<DescontarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescontarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescontarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
