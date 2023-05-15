import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contact.class';


const ContactoComponent = ({contacto}) => {


    return (
        <div>
            <h2>
                Nombre: { contacto.name }
            </h2>
            <h3>
                Apellido: { contacto.apellido }
            </h3>
            <h4>
                Email: { contacto.email }
            </h4>

        </div>
    );
};


ContactoComponent.propTypes = {
    task: PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;