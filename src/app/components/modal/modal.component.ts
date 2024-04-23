import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() show : boolean = false;
  @Input() modalTitle : string = "";
  @Output() saveData = new EventEmitter<any>();
  
  closeModal(){
    this.show = false;
  }

  save() {
    this.saveData.emit();
  }
}
