import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() show : boolean = false;
  @Input() noButtons !: boolean;
  @Input() modalTitle : string = "";
  
  closeModal(){
    this.show = false;
  }
}
