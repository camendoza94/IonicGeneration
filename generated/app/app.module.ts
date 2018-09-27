import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { EstudianteListPage } from '../pages/estudiante/list/estudiante.list';
import { EstudianteEditPage } from '../pages/estudiante/edit/estudiante.edit';
import { EstudianteAddPage } from '../pages/estudiante/add/estudiante.add';
import { EstudianteService} from '../services/estudiante-service'

import { ProfesorListPage } from '../pages/profesor/list/profesor.list';
import { ProfesorEditPage } from '../pages/profesor/edit/profesor.edit';
import { ProfesorAddPage } from '../pages/profesor/add/profesor.add';
import { ProfesorService} from '../services/profesor-service'

import { CursoListPage } from '../pages/curso/list/curso.list';
import { CursoEditPage } from '../pages/curso/edit/curso.edit';
import { CursoAddPage } from '../pages/curso/add/curso.add';
import { CursoService} from '../services/curso-service'

import { DireccionListPage } from '../pages/direccion/list/direccion.list';
import { DireccionEditPage } from '../pages/direccion/edit/direccion.edit';
import { DireccionAddPage } from '../pages/direccion/add/direccion.add';
import { DireccionService} from '../services/direccion-service'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
	EstudianteListPage,
	EstudianteEditPage,
	EstudianteAddPage,
	ProfesorListPage,
	ProfesorEditPage,
	ProfesorAddPage,
	CursoListPage,
	CursoEditPage,
	CursoAddPage,
	DireccionListPage,
	DireccionEditPage,
	DireccionAddPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	EstudianteListPage,
	EstudianteEditPage,
	EstudianteAddPage,
	ProfesorListPage,
	ProfesorEditPage,
	ProfesorAddPage,
	CursoListPage,
	CursoEditPage,
	CursoAddPage,
	DireccionListPage,
	DireccionEditPage,
	DireccionAddPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
	EstudianteService,
	ProfesorService,
	CursoService,
	DireccionService,
  ]
})
export class AppModule {}
