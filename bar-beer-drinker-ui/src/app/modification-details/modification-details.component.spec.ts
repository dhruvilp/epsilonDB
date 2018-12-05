import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationDetailsComponent } from './modification-details.component';

describe('ModificationDetailsComponent', () => {
  let component: ModificationDetailsComponent;
  let fixture: ComponentFixture<ModificationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
