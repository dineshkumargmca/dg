import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DgStackComponent } from '@dg/dgcomponents';

@Component({
  imports: [RouterModule, DgStackComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}
