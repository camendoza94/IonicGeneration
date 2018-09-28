import { Component } from '@angular/core';
import { NavController ,ToastController, NavParams} from 'ionic-angular';
import {AtributoItemInterface} from '../../../model/common/atributo-item'
import {AtributoItemBooleanModel} from '../../../model/common/atributo-item-boolean'
import {AtributoItemStringModel} from '../../../model/common/atributo-item-string'
import {AtributoItemDateModel} from '../../../model/common/atributo-item-date'
import {AtributoItemNumberModel} from '../../../model/common/atributo-item-number'
import { DireccionModel, DireccionModelDelegate } from '../../../model/direccion/direccion';

@Component({
  selector: 'page-direccion-add',
  templateUrl: 'direccion.add.html'
})
export class DireccionAddPage {

  direccion = new DireccionModel();
  
  public delegate:DireccionModelDelegate;

  constructor(private toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams) {
    this.delegate =  navParams.get("delegate");
  }
  
  guardar(){
    if(this.validar()){
      this.delegate.addDireccion(this.direccion)
      this.navCtrl.pop();
    }
    else{
      this.presentToast();
    }
    
  }
 validar():Boolean{
    var resp = true;
    for(let f of this.direccion.fields){
      
      if(f.isMandatory && ( f instanceof AtributoItemStringModel || f instanceof AtributoItemDateModel  ) ){

        if(f.getValue().trim() === ""){
          resp= false;
        }
        
      }
    }

    return resp;
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Debe completar todos los datos requeridos para Direccion',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.present();
  }
}