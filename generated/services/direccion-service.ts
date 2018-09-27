import { Injectable } from '@angular/core';
import { DireccionModel } from '../model/direccion/direccion';

@Injectable()
export class DireccionService {

  direccions : DireccionModel[];
  constructor() {
    this.direccions = []; 
  }

  add(direccion:DireccionModel){
    this.direccions.push(direccion);
  }

  remove(direccion:DireccionModel){
    for(var i = 0; i < this.direccions.length; i++) {
        if(this.direccions[i] == direccion){
            this.direccions.splice(i, 1);
        }
    }
  }
}