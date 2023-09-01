import Tarea from './tarea.js';

class Tareas {

    _listado ={};

    get listadoArr() {
        const listado = []
        Object.keys(this._listado).forEach( key => {
            const tarea =this._listado[key];
            listado.push(tarea)
        console.log(key);
        });
        return listado;1
        
    }

    constructor() {
        this._listadoPendientes = {};
        this._listadoCompletadas = {};
      }

      crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listadoPendientes[tarea.id] = tarea;
      }

      borrarTarea(id) {
        if (this._listadoPendientes[id]) {
          delete this._listadoPendientes[id];
        } else if (this._listadoCompletadas[id]) {
          delete this._listadoCompletadas[id];
        }
      };
      
marcarCompletada(id) {
    const tarea = this._listadoPendientes[id];
    if (tarea) {
      tarea.completado = true;
      delete this._listadoPendientes[id];
      this._listadoCompletadas[id] = tarea;
    }
}

listarPendientes() {
  const pendientes = Object.values(this._listadoPendientes);
  return { pendientes };
}

listarCompletadas() {
  const completadas = Object.values(this._listadoCompletadas);
  return { completadas };
}
}  

export default Tareas