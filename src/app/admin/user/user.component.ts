import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = {
    name: 'Karlo Mirasol',
    email: 'kqmirasol@icloud.com',
    phone: '0961-903-0065',
    address: 'Mabalacat City, Pampanga'
  };
}
