import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  check=true;
  showSecondPart = false;

  constructor() {
    // Show the second part after 4 seconds
    setTimeout(() => {
      this.showSecondPart = true;
    }, 3000); // Adjust this timing based on the animation duration
  }

  @HostListener('window:scroll', ['$event']) 
  onScroll(event: any) {
      // Your logic here
      console.log('Window scrolled:', event);
      this.check = false;
  }
}
