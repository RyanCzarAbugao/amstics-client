import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  @Output() toggleSidebarEvent = new EventEmitter<boolean>();  
  sidebarActive = false;
  
  public toggleSidebar(value: boolean) {
    this.sidebarActive = !this.sidebarActive;
    this.toggleSidebarEvent.emit(value);
  }
}
