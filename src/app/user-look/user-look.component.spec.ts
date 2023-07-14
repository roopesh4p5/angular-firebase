import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLookComponent } from './user-look.component';

describe('UserLookComponent', () => {
  let component: UserLookComponent;
  let fixture: ComponentFixture<UserLookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLookComponent]
    });
    fixture = TestBed.createComponent(UserLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
