<<<<<<< HEAD
import * as React from 'react';
import {NavigationBar} from "./NavigationBar";


export const Altas = () => {
    return (
        <div>
            <NavigationBar />

            <section>
                <h3>ALTAS</h3>
            </section>
        </div>
=======
import * as React from "react";
import {Link} from "react-router-dom";

export const Altas = () => {
    return (

                <form className="formulario">
                    <div className="classnumerohistoria">
                        <label>NHC</label>
                        <input
                            id="personas"
                            type="number"
                            name="personas"
                        />
                    </div>
                    <div className="classtelefono">
                        <label>Telefono</label>
                        <input
                            id="personas"
                            type="number"
                            name="personas"
                        />
                    </div>
                    <div className="classConsentimiento">
                        <label>Consentimiento</label>
                        <input
                            id="fecha"
                            type="date"
                            name="fecha"
                        />
                    </div>
                    <div className="classprimerallamada">
                        <label>Primera llamada</label>
                        <input
                            id="personas"
                            type="number"
                            name="personas"
                        />
                    </div>
                    <div className="classsegunda llamada">
                        <label>Segunda llamada</label>
                        <input
                            id="personas"
                            type="number"
                            name="personas"
                        />
                    </div>

                    <div className="classtrecerallamada">
                        <label>Tercera llamada</label>
                        <input
                            id="personas"
                            type="number"
                            name="personas"
                        />
                    </div>

                    <div className="classpruebaesfuerzo">
                        <label>Prueba Esfuerzo</label>
                        <input
                            id="personas"
                            type="number"
                            name="personas"
                        />
                    </div>

                    <div className="classeco">
                        <label>ECO</label>
                        <input
                            id="personas"
                            type="number"
                            name="personas"
                        />
                    </div>


                    <div>
                        <button className="boton" >
                            <Link className="textoboton" to={"./Altas"}>Altas</Link>
                        </button>
                    </div>
                </form>
>>>>>>> 06f046c51221a516cdbca3d8ac8e42f8080334e1
    )
}