import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWikComponent } from './main-wik.component';

describe('MainWikComponent', () => {
  let component: MainWikComponent;
  let fixture: ComponentFixture<MainWikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
