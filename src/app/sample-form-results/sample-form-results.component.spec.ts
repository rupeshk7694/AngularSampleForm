import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleFormResultsComponent } from './sample-form-results.component';

describe('SampleFormResultsComponent', () => {
  let component: SampleFormResultsComponent;
  let fixture: ComponentFixture<SampleFormResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleFormResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleFormResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
