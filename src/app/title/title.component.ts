import { Component, computed, input, OnChanges, output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnChanges{
  title = input.required<string>()
  colorChange = output<string>()

  titleU = computed(() => this.title().toUpperCase()) 

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log(this.title());
    
    this.colorChange.emit("red")
  }


}
