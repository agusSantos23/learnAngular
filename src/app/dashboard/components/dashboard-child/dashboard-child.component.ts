import { ChangeDetectionStrategy, Component, Input, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard-child',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './dashboard-child.component.html',
  styleUrl: './dashboard-child.component.css'
})
export class DashboardChildComponent implements OnInit{

  @Input() text: string = ''
  @Output() textChange = new EventEmitter<string>()

  ngOnChanges(changes: SimpleChanges): void{
    
    console.log('Se cambio el dashboard-child', changes)

  }

  ngOnInit(): void {
    console.log('Se inicio el dashboard-child');
      
  }

  handleClick(){
    this.text = 'dashboard change text by child'
    this.textChange.emit(this.text)
    
  }

}
