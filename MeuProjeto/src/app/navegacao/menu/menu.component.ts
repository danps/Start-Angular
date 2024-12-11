import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'; 
import {RouterLink} from '@angular/router';  
@Component({
  selector: 'app-menu', 
  imports: [ 
    CommonModule,
    RouterLink, 
  ],
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {

}
