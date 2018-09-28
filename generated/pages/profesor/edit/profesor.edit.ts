import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ProfesorModel} from '../../../model/profesor/profesor'


import {DireccionModelDelegate, DireccionModel } from '../../../model/direccion/direccion';
import {DireccionEditPage } from '../../direccion/edit/direccion.edit';
import { DireccionAddPage } from '../../direccion/add/direccion.add';

@Component({
  selector: 'page-profesor-edit',
  templateUrl: 'profesor.edit.html'
})


export class ProfesorEditPage implements DireccionModelDelegate{

  profesor = new ProfesorModel();
  
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profesor =  navParams.get("data");
  }

	toggleSectionDireccions() {
    this.profesor.direccionsOpen = !this.profesor.direccionsOpen;
  }
  
  pressAddDireccion(){
    this.navCtrl.push(DireccionAddPage,{
      delegate: this
    });
  }
  
   public addDireccion(direccion:DireccionModel):void{
    this.profesor.addDireccion(direccion)
  }
  
  public removeDireccion(direccion:DireccionModel):void{
    this.profesor.removeDireccion(direccion)
  }
}