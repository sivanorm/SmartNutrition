import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitehomeComponent } from './sitehome.component';

describe('SitehomeComponent', () => {
  let component: SitehomeComponent;
  let fixture: ComponentFixture<SitehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitehomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SitehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
