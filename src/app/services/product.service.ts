import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  _products:string[] = []

  constructor() { }


  createProduct(product:string){

    this._products.push(product)

  }

  get products(){

    return this._products;

  }

}
