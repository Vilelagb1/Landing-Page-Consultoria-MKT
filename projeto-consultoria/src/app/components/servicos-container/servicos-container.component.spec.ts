import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosContainerComponent } from './servicos-container.component';

describe('ServicosContainerComponent', () => {
  let component: ServicosContainerComponent;
  let fixture: ComponentFixture<ServicosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicosContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
