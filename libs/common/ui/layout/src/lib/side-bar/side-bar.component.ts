import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'spc-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class SideBarComponent {
}
