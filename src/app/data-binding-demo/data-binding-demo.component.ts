import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding-demo.component.html',
  styleUrl: './data-binding-demo.component.css'
})
export class DataBindingDemoComponent {
   // One-Way Data Binding
  name = 'Karlo Mirasol';
  imageUrl = '../images/avatar.png';
  h=200;
  w=200;
  altText='Avatar';

  textColor = "blue";

  // Two-Way Data Binding
  fullname = '';
  email = '';

  // Event Binding Counter
  counter = 0;
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}
