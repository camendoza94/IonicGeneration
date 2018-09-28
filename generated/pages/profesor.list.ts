import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfesorService} from '../../../services/profesor-service'
import { ProfesorEditPage } from '../edit/profesor.edit';
import { ProfesorAddPage } from '../add/profesor.add';
import { ProfesorModel, ProfesorModelDelegate } from '../../../model/profesor/profesor';

@Component({
  selector: 'page-profesor-list',
  templateUrl: 'profesor.list.html'
})
export class ProfesorListPage {

	constructor(public navCtrl: NavController, private model:ProfesorService) {
  	}
  itemSelected(item) {
    
    this.navCtrl.push(ProfesorEditPage, {
      data: item
    });
  }
  itemSelectedToMaster(item) {
    
    this.delegate.addCurso(item);
    this.navCtrl.pop();
  }

  pressAddProfesor() {
    this.navCtrl.push(ProfesorAddPage, {
      delegate: this
    });
  }

  public addProfesor(profesor:ProfesorModel):void{
    this.model.add(profesor)
  }
  public removeProfesor(profesor:ProfesorModel):void{
    this.model.remove(profesor)
  }

}
