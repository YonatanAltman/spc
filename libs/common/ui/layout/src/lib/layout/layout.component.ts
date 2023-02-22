import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {SideBarComponent} from "../side-bar/side-bar.component";

@Component({
  selector: 'spc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [HeaderComponent, SideBarComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  name = 'Layout';
}
