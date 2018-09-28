import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ProfesorModel} from '../../../model/profesor/profesor'

@Component({
  selector: 'page-profesor-edit',
  templateUrl: 'profesor.edit.html'
})
export class ProfesorEditPage {

  profesor = new ProfesorModel();
  
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profesor =  navParams.get("data");
  }


}