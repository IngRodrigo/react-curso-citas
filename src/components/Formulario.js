import React, { Fragment, useState } from 'react';


const Formulario = () => {

    const [cita, actualizarCita]=useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

    //funcion que se ejecuta cada vez que el usuario escribe en los input oneChange

    const actualizarState=(evento)=>{
//       console.log(evento.target.name);
        actualizarCita({
            ...cita,
            [evento.target.name]:evento.target.value
        });
    }

    //extraer los datos de cita
    const {nombre, mascota, propietario, date, time}=cita;
   // console.log(cita);
    return (  
        <Fragment>
           <h2>Crear Cita</h2>
           <form>
                <label>Nombre mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la moscota"
                    onChange={actualizarState}
                />

                <label>Nombre del dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño"
                    onChange={actualizarState}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}

                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                />
                <label>Sintomas</label>
                <textarea
                className="u-full-width"
                name="sintomas"
                onChange={actualizarState}
                >

                </textarea>
                <button
                className="u-full-width button-primary"
                type="submit">
                Agregar cita
                </button>
           </form>

        </Fragment>
    );
}
 
export default Formulario;