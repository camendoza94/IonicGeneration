import { Injectable } from '@angular/core';
import { ProfesorModel } from '../model/profesor/profesor';

@Injectable()
export class ProfesorService {

  profesors : ProfesorModel[];
  constructor() {
    this.profesors = []; 
  }

  add(profesor:ProfesorModel){
    this.profesors.push(profesor);
  }

  remove(profesor:ProfesorModel){
    for(var i = 0; i < this.profesors.length; i++) {
        if(this.profesors[i] == profesor){
            this.profesors.splice(i, 1);
        }
    }
  }
}