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
            // agregarTestimonios: (state, action) =>{
            //     state.testimonios.push(action.payload);
            //     state.loading = false                                
            // },
            // testimoniosFetching: (state) =>{
            //     state.loading = true
            // },
            // testimonioError: (state, action) =>{
            //     state.error = action.payload;
            //     state.loading = false
            // },
            // actualizarTestimonio: (state, action) =>{
            //     state.testimonios = state.testimonios.map(testimonio => testimonio.id === action.payload.id ? action.payload : testimonio);
            //     state.loading = false
                
            // },
            // testimonioActual: (state, action) =>{
            //     state.testimonio = action.payload
            // },
            // eliminarTestimonio: (state, action)=>{
                
            //     state.testimonios = state.testimonios.filter(testimonio=>testimonio.id !== action.payload)                
            // }
        }
})

// export const { obtenerTestimonios, agregarTestimonios, actualizarTestimonio, eliminarTestimonio, testimonioActual, testimoniosFetching, testimonioError } = busquedaReducer.actions;
export const { obtenerResultadosUsuarios, obtenerResultadosConciliaciones, obtenerResultadosFuentes, obtenerResultadosTableros} = busquedaReducer.actions;

export const obtenerResultadosApi =  () => async dispatch => {
        // dispatch(testimoniosFetching())
    try {
        const respuestaUsuarios = await fetch('http://localhost:3000/api/usuarios');
        const resultadoUsuarios = await respuestaUsuarios.json();
        console.log("USUARIOS", resultadoUsuarios)
            
        dispatch(obtenerResultadosUsuarios(resultadoUsuarios))

        const respuestaConciliaciones = await fetch('http://localhost:3000/api/conciliaciones');
        const resultadoConciliaciones = await respuestaConciliaciones.json();
        console.log("CONCILIACIONES", resultadoConciliaciones)
            
        dispatch(obtenerResultadosConciliaciones(resultadoConciliaciones))

        const respuestaFuentes = await fetch('http://localhost:3000/api/fuentes');
        const resultadoFuentes = await respuestaFuentes.json();
        console.log("FUENTES", resultadoFuentes)
            
        dispatch(obtenerResultadosFuentes(resultadoFuentes))

        const respuestaTableros = await fetch('http://localhost:3000/api/tableros');
        const resultadoTableros = await respuestaTableros.json();
        console.log("TABLEROS",resultadoTableros)
            
        dispatch(obtenerResultadosTableros(resultadoTableros))
        
    } catch (error) {
        // dispatch(testimonioError(error.message));
        console.log(error.message);
    }

};

// export const agregarTestimonioApi = testimonio => async dispatch => {
//     dispatch(testimoniosFetching())
//     try {               
//         await fetch('http://ongapi.alkemy.org/api/testimonials', {
//             method: 'POST', 
//             body: JSON.stringify(testimonio), 
//             headers:{
//               'Content-Type': 'application/json'
//             }})
        
                
//         dispatch(agregarTestimonios(testimonio))

//      } catch (error) {
//         dispatch(testimonioError(error.message));
//     }
//  }


//  export const actualizarTestimonioApi = testimonio => async dispatch => {
    
//     dispatch(testimoniosFetching())
//    try {
       
//        const resultado = await fetch(`http://ongapi.alkemy.org/api/testimonials/${testimonio.id}`, {
//            method: 'PUT',
//            body: JSON.stringify(testimonio), 
//            headers:{
//              'Content-Type': 'application/json'
//            }})
           
//            const result = await resultado.json()
           
//         dispatch(actualizarTestimonio(result.data))

//    } catch (error) {
//     dispatch(testimonioError(error.message));
//     console.log(error)
// }
// }

// export const obtenerTestimonioActual = testimonio => dispatch => {
    
//     dispatch(testimonioActual(testimonio))
// }

// export const eliminarTestimonioApi = id => async dispatch =>{
    
//     try {
//         await fetch(`http://ongapi.alkemy.org/api/testimonials/${id}`, {
//             method: 'DELETE',
//             })
                                           
//         dispatch(eliminarTestimonio(id))

//     } catch (error) {
//     dispatch(testimonioError(error.message));
// }
// }   
export default busquedaReducer.reducer;

