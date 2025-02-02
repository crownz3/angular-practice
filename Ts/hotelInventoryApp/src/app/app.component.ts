import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './views/rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [RouterOutlet,RoomsComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hotelInventoryApp';
}
