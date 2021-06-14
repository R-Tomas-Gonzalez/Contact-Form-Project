import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import '../App.css'
import '../index.css';

const EditModal = ({ open, children, onClose }) => {

    if(!open) return null;

    return ReactDom.createPortal(
        <Fragment>
            <div className="overlay-styles" onClick={onClose}/>
            <div className="modal-styles">
                <button onClick={onClose}>X</button>
                {children} 
            </div>
        </Fragment>,
        document.getElementById('portal')
    );

}

export default EditModal;