import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoEntrarHojeComponent } from './botao-entrar-hoje.component';

describe('BotaoEntrarHojeComponent', () => {
  let component: BotaoEntrarHojeComponent;
  let fixture: ComponentFixture<BotaoEntrarHojeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotaoEntrarHojeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotaoEntrarHojeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
