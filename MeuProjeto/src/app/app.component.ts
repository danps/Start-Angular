import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./navegacao/menu/menu.component";
import { FooterComponent } from "./navegacao/footer/footer.component";
import { APP_BASE_HREF } from '@angular/common';
import { ProdutoService } from './produtos/produtos.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MenuComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html', 
  styles: [],
  providers: [
    ProdutoService,
    {provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppComponent {
  title = 'MeuProjeto';
}
