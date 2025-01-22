import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule,Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  isRootPath = false;
  check=true;
  showSecondPart = false;
  constructor(private router: Router) {
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

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.isRootPath = this.router.url === '/';
    });
  }

}
