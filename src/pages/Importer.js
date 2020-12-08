import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Importer = (props) => {
    return(
        <div className="content">
            <FontAwesomeIcon icon={faCoffee} />
        </div>
    );
}

export default Importer;