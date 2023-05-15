import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ContactoComponent from './contact';



const ContactoListComponent = (estado) => {

    const [conectado, setConectado] = useState(estado);

    return (
        <div>
            <h3>Estado: { conectado ? "En linea": "Desconectado" }</h3>
            <button onClick={ () => setConectado(!conectado) }>{ conectado === false ? 'Conectar' : 'Desconectar' }</button>
        </div>
    );
};

ContactoListComponent.propTypes = {
    estado: PropTypes.bool
};

export default ContactoListComponent;