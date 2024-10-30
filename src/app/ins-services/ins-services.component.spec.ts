import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsServicesComponent } from './ins-services.component';

describe('InsServicesComponent', () => {
  let component: InsServicesComponent;
  let fixture: ComponentFixture<InsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
