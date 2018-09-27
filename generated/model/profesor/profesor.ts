import '../common/atributo-item'
import { AtributoItemModel,AtributoItemInterface } from '../common/atributo-item';
import { AtributoItemStringModel } from '../common/atributo-item-string';
import { AtributoItemNumberModel } from '../common/atributo-item-number';
import { AtributoItemBooleanModel } from '../common/atributo-item-boolean';
import { AtributoItemDateModel } from '../common/atributo-item-date';
import { CursoModel, CursoModelDelegate } from '../curso/curso';




export interface ProfesorModelDelegate {
    addProfesor: (Profesor:ProfesorModel) => void;
    removeProfesor: (Profesor:ProfesorModel)=> void;
}


export class ProfesorModel implements CursoModelDelegate {
 
    public fields: AtributoItemModel[];
    
    public cursos: CursoModel[];
    public cursosOpen: Boolean = false;


    constructor(){
        this.fields = [];
        this.fields.push(new AtributoItemStringModel("Nombre", true, true, true, false, ""));
        this.fields.push(new AtributoItemStringModel("Codigo", false, true, true, false, ""));
        this.fields.push(new AtributoItemStringModel("Falcultad", false, false, true, true, ""));
        this.fields.push(new AtributoItemDateModel("Inicio", false, false, false, true, ""));
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
    
}