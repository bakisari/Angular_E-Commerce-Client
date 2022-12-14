import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FootersComponent } from './footers/footers.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FootersComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FootersComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
