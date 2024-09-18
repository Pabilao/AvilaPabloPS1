import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidemenuComponentComponent } from './Components/sidemenu-component/sidemenu-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidemenuComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AvilaPablo3E1';
}
