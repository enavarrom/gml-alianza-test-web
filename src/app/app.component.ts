import { Component } from '@angular/core';
import { MatSidenavModule  } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list'
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MatToolbarModule, MatSidenavModule, MatListModule, RouterOutlet, RouterModule]
})
export class AppComponent {
  title = 'gml-alianza-test-web';
}