import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servicos-container',
  templateUrl: './servicos-container.component.html',
  styleUrl: './servicos-container.component.scss'
})
export class ServicosContainerComponent {
  @Input () titulo: string = ""
  @Input () texto: string = ""
}
