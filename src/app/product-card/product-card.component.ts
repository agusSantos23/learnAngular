import { Component, inject } from '@angular/core'

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { error } from 'node:console'

@Component({
  selector: 'app-product-card',
  imports: [ReactiveFormsModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  readonly #formBuilder = inject(FormBuilder)
  
  product = {
    url: "https://artemonte.com/wp-content/uploads/corte-de-la-carne-y-sus-tipos-768x512.jpg",
    name: "Carne",
    description: "Comida que alimenta a los carnivoros y omnivoros",
    amount: 3,
    id: 423,
    isBlackAndWhite: false
  }

  formState = false

  formEmail = this.#formBuilder.group({
    email: ['', [Validators.email , Validators.required]]
  });

  

  buyProduct(): void{
    console.log(`Has comprado ${this.product.name}`)
    this.formState = true
  }

  orderProduct = () => {

    if (this.formEmail.valid) {
      console.log("Correo:", this.formEmail.value)
    }else{
      console.error("Falta el campo email")
    }
  }
  

  mouseImg = () => this.product.isBlackAndWhite = !this.product.isBlackAndWhite
  
}
