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
// State variables
showForm = false;          // Controls form visibility
isButtonEnabled = false;   // Controls button enabled/disabled state
isDisabled = true;         // Controls toggle button enabled/disabled state

// Toggles the form and enables/disables the button
toggleForm() {
  this.showForm = !this.showForm;
  this.isButtonEnabled = this.showForm; // Button enabled only when form is shown
  this.isDisabled = !this.showForm; // Disable toggle button when form is hidden
}

 // Dynamic Product List
 highlightStock = false;
 products = [
   { name: 'Iphone 15 Pro Max', price: 1599, inStock: true },
   { name: 'Iphone 14 Pro Max', price: 1299, inStock: false },
   { name: 'Iphone 16 Pro Max', price: 1999, inStock: true },
 ];

 toggleStockHighlight() {
   this.highlightStock = !this.highlightStock;
 }


}
