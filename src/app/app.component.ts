import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'attendance-monitoring-using-qr-code';
  sidebarActive : boolean = false;
  activeSidebarClass: string = "fixed shadow-lg h-screen z-10 transition-[left] ease-in-out duration-300 left-0";  
  inactiveSidebarClass: string = "fixed shadow-lg h-screen z-10 transition-[left] ease-in-out duration-300 -left-full";  

  protected toggleSidebar(value: boolean) {
    this.sidebarActive = !this.sidebarActive;
  }
}
