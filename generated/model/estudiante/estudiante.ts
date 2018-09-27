import '../common/atributo-item'
import { AtributoItemModel,AtributoItemInterface } from '../common/atributo-item';
import { AtributoItemStringModel } from '../common/atributo-item-string';
import { AtributoItemNumberModel } from '../common/atributo-item-number';
import { AtributoItemBooleanModel } from '../common/atributo-item-boolean';
import { AtributoItemDateModel } from '../common/atributo-item-date';
import { CursoModel, CursoModelDelegate } from '../curso/curso';
import { DireccionModel, DireccionModelDelegate } from '../direccion/direccion';




export interface EstudianteModelDelegate {
    addEstudiante: (Estudiante:EstudianteModel) => void;
    removeEstudiante: (Estudiante:EstudianteModel)=> void;
}


export class EstudianteModel implements CursoModelDelegate, DireccionModelDelegate {
 
    public fields: AtributoItemModel[];
    
    public cursos: CursoModel[];
    public cursosOpen: Boolean = false;
    public direccions: DireccionModel[];
    public direccionsOpen: Boolean = false;


    constructor(){
        this.fields = [];
        this.fields.push(new AtributoItemStringModel("Nombre", true, true, true, false, ""));
        this.fields.push(new AtributoItemStringModel("Codigo", false, true, true, false, ""));
        this.fields.push(new AtributoItemStringModel("Semestre", false, false, true, true, ""));
        this.fields.push(new AtributoItemBooleanModel("Activo", false, false, false, true, true));
    }

    public getTitleField():AtributoItemModel{
        for(let f of this.fields){
            if(f.isTitle){
                return f;
            }
        }
        return null;
    }
 
    public addCurso(curso:CursoModel){
        this.cursos.push(curso) 
     }
 
    public removeCurso(curso:CursoModel){
        for(var i = 0; i < this.cursos.length; i++) {
    		if(this.cursos[i] == curso) {
            	this.cursos.splice(i, 1);
            }
         }
    }
    
    public addDireccion(direccion:DireccionModel){
        this.direccions.push(direccion) 
     }
 
    public removeDireccion(direccion:DireccionModel){
        for(var i = 0; i < this.direccions.length; i++) {
    		if(this.direccions[i] == direccion) {
            	this.direccions.splice(i, 1);
            }
         }
    }
    
}