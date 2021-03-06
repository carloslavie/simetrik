import { createSlice } from '@reduxjs/toolkit';

export const busquedaReducer = createSlice ({
    name: 'busqueda',
        initialState:{
            resultadoConciliaciones: [],
            resultadoFuentes: [],
            resultadoTableros: [],
            resultadoUsuarios: [],
            loading:null,
            error:null  
        },

        reducers:{
            obtenerResultadosConciliaciones: (state, action) =>{
                state.resultadoConciliaciones = action.payload;
                // state.loading = false
             },
            obtenerResultadosFuentes: (state, action) =>{
                state.resultadoFuentes = action.payload;
                // state.loading = false
             },
            obtenerResultadosTableros: (state, action) =>{
                state.resultadoTableros = action.payload;
                // state.loading = false
             },
            obtenerResultadosUsuarios: (state, action) =>{
                state.resultadoUsuarios = action.payload;
                // state.loading = false
             },
            
        }
})

export const { obtenerResultadosUsuarios, obtenerResultadosConciliaciones, obtenerResultadosFuentes, obtenerResultadosTableros} = busquedaReducer.actions;

export const obtenerResultadosApi =  () => async dispatch => {
        // dispatch(testimoniosFetching())
    try {

        const urlHeroku = 'https://simetrik.herokuapp.com'
        //const urlLocal = 'http://localhost:3000'
        const respuestaUsuarios = await fetch(`${urlHeroku}/api/usuarios`);
        const resultadoUsuarios = await respuestaUsuarios.json();
        console.log("USUARIOS", resultadoUsuarios)
            
        dispatch(obtenerResultadosUsuarios(resultadoUsuarios))

        const respuestaConciliaciones = await fetch(`${urlHeroku}/api/conciliaciones`);
        const resultadoConciliaciones = await respuestaConciliaciones.json();
        console.log("CONCILIACIONES", resultadoConciliaciones)
            
        dispatch(obtenerResultadosConciliaciones(resultadoConciliaciones))

        const respuestaFuentes = await fetch(`${urlHeroku}/api/fuentes`);
        const resultadoFuentes = await respuestaFuentes.json();
        console.log("FUENTES", resultadoFuentes)
            
        dispatch(obtenerResultadosFuentes(resultadoFuentes))

        const respuestaTableros = await fetch(`${urlHeroku}/api/tableros`);
        const resultadoTableros = await respuestaTableros.json();
        console.log("TABLEROS",resultadoTableros)
            
        dispatch(obtenerResultadosTableros(resultadoTableros))
        
    } catch (error) {
        // dispatch(testimonioError(error.message));
        console.log(error.message);
    }

};


export default busquedaReducer.reducer;

