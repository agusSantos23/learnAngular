import { Component } from '@angular/core';

interface Address {
  country: string
  city: string
  street: string
}

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  
  name: string = "John"
  surname: string = "Doe"
  age: number = 33
  married: boolean = true
  address: Address = {
    country: "UK",
    city: "Damascus",
    street: "Liberty"
  }
  private dni = '348927234J'

  
  

  getTime(): object {
    return new Date()
  }
}
