import {RouterModule} from '@angular/router';
import {Component} from '@angular/core';
import {LayoutComponent} from "@spc/common/ui/layout";

@Component({
  standalone: true,
  imports: [ RouterModule,LayoutComponent],
  selector: 'spc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'all-event';
}
