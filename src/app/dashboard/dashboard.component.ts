import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardChildComponent } from './components/dashboard-child/dashboard-child.component';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DashboardChildComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  text:string = 'dashboard'

  

  handleClick(){
    this.text = 'dashboard textttt'
  }
}
