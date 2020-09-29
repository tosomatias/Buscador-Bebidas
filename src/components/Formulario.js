import React, { useContext,useState } from 'react';
import {CategoriasContext} from '../context/CategoriasContext';
import {RecetasContext} from '../context/RecetasContext';


const Formulario = () => {

    const {categorias} = useContext(CategoriasContext);
    const {buscarRecetas,guardarConsultar} = useContext(RecetasContext);
    const [busqueda,guardarBusqueda] = useState({
        nombre:'',
        categoria:''
    });

    const {nombre,categoria} = busqueda;

    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }


    return (  
        <form
            className="col-12"
            onSubmit = {e => {
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}
        >
            <fieldset className="text-center mt-4">
                <legend>Busca Bebidas por Ingrediente o Categorias</legend>
            </fieldset>
            <div className="row">
                <div className="col-md-4  mt-2">
                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Buscar por Ingrediente"
                        value={nombre}
                        onChange = {obtenerDatosReceta}
                    />    
                </div>
                <div className="col-md-4 mt-2">
                    <select
                        className="form-control"
                        name="categoria"
                        value = {categoria}
                        onChange = {obtenerDatosReceta}
                    >
                    <option value="">--Selecciona Categoria --</option>
                    {categorias.map(categoria =>(
                        <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
                    ))}
                    </select>
                </div>
                <div className="col-md-4 mt-2">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />    

                </div>

            </div>
        </form>

    );
}

export default Formulario;