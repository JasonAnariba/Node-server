import { v4 as uuidv4 } from "uuid";

class Tarea {
 id ='';
 desc = '';
 compleado = false;

 constructor( desc) {
    this.id = uuidv4();
    this.desc = desc;
    
 }
}

export default Tarea;