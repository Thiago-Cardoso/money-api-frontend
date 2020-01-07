import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchsRegisterComponent } from './launchs-register.component';

describe('LaunchsRegisterComponent', () => {
  let component: LaunchsRegisterComponent;
  let fixture: ComponentFixture<LaunchsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
