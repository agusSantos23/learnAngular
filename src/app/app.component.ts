import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HeaderComponent } from "./components/header/header.component";
import { WrapperComponent } from "./wrapper/wrapper.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCardComponent, HeaderComponent, WrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learnAngular';
}
