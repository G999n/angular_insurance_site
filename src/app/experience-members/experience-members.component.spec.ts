import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceMembersComponent } from './experience-members.component';

describe('ExperienceMembersComponent', () => {
  let component: ExperienceMembersComponent;
  let fixture: ComponentFixture<ExperienceMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceMembersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperienceMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
