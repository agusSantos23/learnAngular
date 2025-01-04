import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { log } from 'node:console';


@Component({
  selector: 'app-header',
  imports: [TitleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy, DoCheck, AfterContentChecked, AfterViewChecked {

  pageTitle: string = "MY APP"
  constructor(){
    console.log('contructor creado');
    
  }

  colorChanged(color: string){
    console.log(color);
    
  }
  
  onDataCheck(e: any){
    console.log(e)
  }
  
  ngOnInit(): void {
    console.log("OnInit ejecutado");
  }

  ngAfterContentInit(): void {
    console.log("AfterContentInit ejecutado");
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit ejecutado");
  }

  ngOnDestroy(): void {
    console.log("OnDestroy ejecutado");
  }

  ngDoCheck(): void {
    console.log("DoCheck ejecutado");
  }
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked ejecutado");
  }
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked ejecutado");
  }
  


}
