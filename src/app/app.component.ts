import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

interface ArreglitoItem{
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learnAngular'

  condition: boolean = false
  arreglito: ArreglitoItem[] = [
    {id:1, name: 'item1'},
    {id:2, name: 'item2'},

  ]
  
  trackByFn( item: ArreglitoItem){
    return item.id
  }


  conditionChange(): void{
    this.condition = !this.condition    
  }
}
