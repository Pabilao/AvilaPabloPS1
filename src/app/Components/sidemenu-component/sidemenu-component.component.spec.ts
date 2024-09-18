import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenuComponentComponent } from './sidemenu-component.component';

describe('SidemenuComponentComponent', () => {
  let component: SidemenuComponentComponent;
  let fixture: ComponentFixture<SidemenuComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidemenuComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidemenuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
