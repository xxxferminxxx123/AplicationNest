import { direccionamiento } from '../../Ruta/Direccion/Direccion';

const direccion = new direccionamiento();

export const RUTA_DIRECCION= {

         MAIN           : direccion.Main
        ,AGREGAR        : direccion.Agregar
        ,MODIFICAR      : direccion.Modificar
        ,ELIMINAR       : direccion.Eliminar
        ,LISTAR         : direccion.Listar

};
