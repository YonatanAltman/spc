import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'spc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class HeaderComponent {}
