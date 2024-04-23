import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'attendance-monitoring-using-qr-code';
  sidebarActive : boolean = false;
  activeSidebarClass: string = "left-0";  
  inactiveSidebarClass: string = "-left-full";  

  protected toggleSidebar(value: boolean) {
    this.sidebarActive = !this.sidebarActive;
  }
}
