import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { AvatarComponent } from '../avatar/avatar.component';


@Component({
  selector: 'app-header',
  imports: [TitleComponent, AvatarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy, DoCheck, AfterContentChecked, AfterViewChecked {

  pageTitle: string = "Holaa"

  userInfo = {
    img: "https://media.istockphoto.com/id/1495088043/es/vector/icono-de-perfil-de-usuario-avatar-o-icono-de-persona-foto-de-perfil-s%C3%ADmbolo-de-retrato.jpg?s=612x612&w=0&k=20&c=mY3gnj2lU7khgLhV6dQBNqomEGj3ayWH-xtpYuCXrzk=",
    role: "Admin"
  }

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
