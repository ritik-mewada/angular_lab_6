import { Component } from '@angular/core';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [HeaderComponent, FooterComponent, RouterModule],
})
export class AppComponent {
  title = 'Task Manager';
}
