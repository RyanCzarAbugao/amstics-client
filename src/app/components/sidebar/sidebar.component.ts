import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Module } from 'src/interfaces/module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() sidebarActive: boolean = false;
  @Output() toggleSidebarEvent = new EventEmitter<boolean>();

  readonly activeLinkClass: string = "text-yellow-400 bg-green-800 hover:bg-green-700";
  readonly activeIconClass: string = "text-yellow-400";
  readonly inactiveLinkClass: string = "text-gray-500 hover:bg-lime-300";
  readonly inactiveIconClass: string = "text-gray-500";

  modules : Module[] = [
    {name: "Home", active: true},
    {name: "Attendances", active: false},
    {name: "Schedules", active: false},
    {name: "Users", active: false},
    {name: "QrCodeSetup", active: false},
    {name: "ScanQrCode", active: false},
    {name: "Profile", active: false},
    {name: "Notifications", active: false},
    {name: "Settings", active: false}
  ];
  
  toggleSidebarNavLink(moduleName: string) {
    let activeModule = this.modules.find(e => e.name === moduleName);
    
    if (activeModule === undefined) 
      throw new Error("Module Name is not found from the list of Modules");      

    activeModule.active = true;

    let inactiveModules = this.modules.filter(e => e.name !== moduleName);

    inactiveModules.forEach(e => {
      e.active = false;
    });
  }

  toggleSidebar(value: boolean) {
    this.sidebarActive = !this.sidebarActive;
    this.toggleSidebarEvent.emit(value);
  }
}