import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoFollowComponent } from './who-follow.component';

describe('WhoFollowComponent', () => {
  let component: WhoFollowComponent;
  let fixture: ComponentFixture<WhoFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoFollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
