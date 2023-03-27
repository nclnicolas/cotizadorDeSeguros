export const MARCAS =[
    {id: 1, nombre: 'Europeo'},
    {id: 2, nombre: 'Americano'},
    {id: 3, nombre: 'Asiatico'},
]

const YEARMAX = new Date().getFullYear();
export const YEAR = Array.from(new Array(20), (valor, index) => YEARMAX - index)
//Aca creamos un array para obtener los ultimos 20 años 

export const PLANES =[
    {id: 1, nombre: 'Basico'},
    {id: 2, nombre: 'Completo'},
]