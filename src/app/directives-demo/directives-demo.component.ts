import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-directives-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives-demo.component.html',
  styleUrl: './directives-demo.component.css'
})
export class DirectivesDemoComponent {
  isHighlighted = true;
  isLoggedIn = true;
  condition = true;
  fruits = ['Apples', 'Oranges', 'Grapes'];
  color = 'red';
}
