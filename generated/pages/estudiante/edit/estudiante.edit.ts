import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { EstudianteModel} from '../../../model/estudiante/estudiante'


import {CursoModelDelegate, CursoModel } from '../../../model/curso/curso';
import {CursoEditPage } from '../../curso/edit/curso.edit';
import { CursoListPage } from '../../curso/list/curso.list';
import {DireccionModelDelegate, DireccionModel } from '../../../model/direccion/direccion';
import {DireccionEditPage } from '../../direccion/edit/direccion.edit';
import { DireccionAddPage } from '../../direccion/add/direccion.add';

@Component({
  selector: 'page-estudiante-edit',
  templateUrl: 'estudiante.edit.html'
})


export class EstudianteEditPage implements CursoModelDelegate, DireccionModelDelegate{

  estudiante = new EstudianteModel();
  
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.estudiante =  navParams.get("data");
  }

	toggleSectionCursos() {
    this.estudiante.cursosOpen = !this.estudiante.cursosOpen;
  }
  
  pressAddCurso(){
    this.navCtrl.push(CursoAddPage,{
      delegate: this
    });
  }
  
   public addCurso(curso:CursoModel):void{
    this.estudiante.addCurso(curso)
  }
  
  public removeCurso(curso:CursoModel):void{
    this.estudiante.removeCurso(curso)
  }
	toggleSectionDireccions() {
    this.estudiante.direccionsOpen = !this.estudiante.direccionsOpen;
  }
  
  pressAddDireccion(){
    this.navCtrl.push(DireccionAddPage,{
      delegate: this
    });
  }
  
   public addDireccion(direccion:DireccionModel):void{
    this.estudiante.addDireccion(direccion)
  }
  
  public removeDireccion(direccion:DireccionModel):void{
    this.estudiante.removeDireccion(direccion)
  }
}