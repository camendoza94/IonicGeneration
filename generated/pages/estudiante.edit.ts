import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { EstudianteModel} from '../../../model/estudiante/estudiante'

@Component({
  selector: 'page-estudiante-edit',
  templateUrl: 'estudiante.edit.html'
})
export class EstudianteEditPage {

  estudiante = new EstudianteModel();
  
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.estudiante =  navParams.get("data");
  }


}